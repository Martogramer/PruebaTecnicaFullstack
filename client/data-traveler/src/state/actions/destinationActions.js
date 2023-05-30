import {
    getDestinations,
    createDestination,
    getDestinationById,
    searchDestinations,
    deleteDestination
  } from '../../services/api';
  import {
    FETCH_DESTINATIONS,
    ADD_DESTINATION,
    FETCH_DESTINATION,
    SEARCH_DESTINATIONS,
    DELETE_DESTINATION_SUCCESS
  } from '../../types/destinationTypes';
  
  // Acción para obtener todos los destinos turísticos
  export const fetchDestinations = () => async (dispatch) => {
    const destinations = await getDestinations();
    dispatch({ type: FETCH_DESTINATIONS, payload: destinations });
  };
  
  // Acción para crear un nuevo destino turístico
  export const addDestination = (destination) => async (dispatch) => {
    const newDestination = await createDestination(destination);
    dispatch({ type: ADD_DESTINATION, payload: newDestination });
  };
  
  // Acción para obtener un destino turístico por su ID
  export const fetchDestination = (id) => async (dispatch) => {
    const destination = await getDestinationById(id);
    dispatch({ type: FETCH_DESTINATION, payload: destination });
  };
  
  // Acción para buscar destinos turísticos por nombre o ubicación
  export const searchDestination = (query) => async (dispatch) => {
    const destinations = await searchDestinations(query);
    dispatch({ type: SEARCH_DESTINATIONS, payload: destinations });
  };
  
  // accion para eliminar por id:
  export const deleteDestinationByID = (id) => async (dispatch) => {
    const deleteDest = deleteDestination(id);
        dispatch({ type: DELETE_DESTINATION_SUCCESS, payload: deleteDest });
  };