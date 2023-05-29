import {
  FETCH_DESTINATIONS,
  ADD_DESTINATION,
  FETCH_DESTINATION,
  SEARCH_DESTINATIONS,
  DELETE_DESTINATION_SUCCESS,
  FETCH_DESTINATIONS_SUCCESS
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
      case FETCH_DESTINATIONS_SUCCESS:
        return action.payload;
      case DELETE_DESTINATION_SUCCESS:
        return {
          ...state,
          destinations: state.destinations.filter(
            (destination) => destination._id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default destinationReducer;
  