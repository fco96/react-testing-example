import axios from "axios";

const DOGS_URL = "https://dog.ceo/api/breeds/image/random";

export const getDogs = (amount: number): Promise<string[]> => {
  return axios.get(`${DOGS_URL}/${amount}`).then(({ data }) => {
    return data.message;
  });
};

export const getDog = (): Promise<string> => {
  return axios.get(DOGS_URL).then(({ data }) => {
    return data.message;
  });
};
