import * as api from "./index";
import ApiUrls from "./urls";

export const getAllBreeds = async () => {
  await api.get(ApiUrls.breeds);
};
