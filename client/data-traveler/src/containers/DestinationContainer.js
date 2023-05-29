import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DestinationForm from '../components/features/DestinationForm'
import DestinationList from '../components/features/DestinationList';
import { fetchDestinations } from '../state/actions/destinationActions';
import { selectDestinations } from '../state/selectors/destinationSelectors';
import SelectSearchResults from '../components/features/SelectSearchResults';

const DestinationContainer = ({ children }) => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Agregar</h2>
      <div className="mb-4">
        <DestinationForm />
      </div>
      <h2 className="text-xl font-bold mb-4">Búsqueda</h2>
      <div className="mb-4">
        <SelectSearchResults />
      </div>
      <h2 className="text-xl font-bold mb-4">Destinos turísticos</h2>
      <DestinationList />
    </div>
  );
};

export default DestinationContainer;
