export const selectDestinations = (state) => state.destinations;
export const selectDestinationById = (state, id) =>
  state.destinations.find((destination) => destination.id === id);
export const selectSearchResults = (state) => state.searchResults;
