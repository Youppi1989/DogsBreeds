import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "f850d84a-058f-4883-a993-62278d1e664f";
axios.defaults.baseURL = "https://api.thedogapi.com/v1/";

export const get = async (url, params = undefined) => {
  await axios.get(url, { params });
};

export const post = async (url, body = undefined) => {
  await axios.post(url, body);
};

export const deleteRequest = async (url, params = undefined) => {
  await axios.delete(url, { params });
};
