import { render, screen } from "@testing-library/react";
import { DogCard } from "./DogCard";

const EXAMPLE_URL =
  "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg";

test("It renders the given url", () => {
  render(<DogCard url={EXAMPLE_URL} />);

  expect(screen.getByRole("img")).toHaveProperty("src", EXAMPLE_URL);
});
