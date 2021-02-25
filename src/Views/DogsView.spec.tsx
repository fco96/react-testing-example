import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { DogsView, INITIAL_DOGS } from "./DogsView";
import * as DogsService from "../Services/Dogs.service";

const DOGS_MOCK = [
  "https://images.dog.ceo/breeds/1.jpg",
  "https://images.dog.ceo/breeds/2.jpg",
  "https://images.dog.ceo/breeds/3.jpg",
];

const DOG_MOCK = "https://images.dog.ceo/breeds/4.jpg";

let dogsFnMock: jest.SpyInstance;
let dogFnMock: jest.SpyInstance;

beforeEach(() => {
  dogsFnMock = jest
    .spyOn(DogsService, "getDogs")
    .mockImplementation((number: number) => {
      return Promise.resolve(DOGS_MOCK);
    });

  dogFnMock = jest.spyOn(DogsService, "getDog").mockImplementation(() => {
    return Promise.resolve(DOG_MOCK);
  });
});

test(`It renders ${INITIAL_DOGS} dogs`, async () => {
  render(<DogsView />);

  const dogCards = await screen.findAllByRole("img");
  expect(dogsFnMock).toBeCalledTimes(1);
  expect(dogCards.length).toBe(INITIAL_DOGS);
});

test(`It adds dog when clicks btn`, async () => {
  const { container } = render(<DogsView />);

  fireEvent.click(screen.getByRole("button"));
  await waitFor(() =>
    expect(container.querySelector(`[src="${DOG_MOCK}"]`)).toBeTruthy()
  );
  expect(dogFnMock).toBeCalledTimes(1);
});
