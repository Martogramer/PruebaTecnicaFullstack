import {
  FETCH_DESTINATIONS,
  ADD_DESTINATION,
  FETCH_DESTINATION,
  SEARCH_DESTINATIONS,
} from '../../types/destinationTypes';

const initialState = {
  destinations: [],
  selectedDestination: null,
  searchResults: [],
};

const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DESTINATIONS:
        return { ...state, destinations: action.payload };
      case ADD_DESTINATION:
        return { ...state, destinations: [...state.destinations, action.payload] };
      case FETCH_DESTINATION:
        return { ...state, selectedDestination: action.payload };
      case SEARCH_DESTINATIONS:
        return { ...state, searchResults: action.payload };
      default:
        return state;
    }
  };
  
  export default destinationReducer;
  