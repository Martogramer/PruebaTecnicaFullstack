export const selectDestinations = (state) => state.destinations;
export const selectDestinationById = (state, _id) =>
  state.destinations.find((destination) => destination._id === _id);
export const selectSearchResults = (state) => state.searchResults;
