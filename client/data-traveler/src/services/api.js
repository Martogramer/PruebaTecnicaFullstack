import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Reemplaza con la URL de tu API backend

// Función para obtener todos los destinos turísticos
export const getDestinations = async () => {
  const response = await axios.get(`${BASE_URL}/destinations`);
  return response.data;
};

// Función para crear un nuevo destino turístico
export const createDestination = async (destination) => {
  const response = await axios.post(`${BASE_URL}/destinations`, destination);
  return response.data;
};

// Función para obtener un destino turístico por su ID
export const getDestinationById = async (id) => {
  const response = await axios.get(`${BASE_URL}/destinations/${id}`);
  return response.data;
};

// Función para buscar destinos turísticos por nombre o ubicación
export const searchDestinations = async (query) => {
  const response = await axios.get(`${BASE_URL}/destinations`, {
    params: { name: query },
  });
  return response.data;
};

// delete
export const deleteDestination = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/destinations/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
 }
};
