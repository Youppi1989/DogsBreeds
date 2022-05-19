const ApiUrls = {
  baseUrl: "https://api.thedogapi.com/v1/",
  breeds: "/breeds",
  favourites: "/favourites",
  deleteFavourites: (favouritesId) => `/favourites/${favouritesId}`,
  images: "/images/search",
};

export default ApiUrls;
