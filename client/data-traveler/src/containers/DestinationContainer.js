import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DestinationForm from '../components/features/DestinationForm'
import DestinationList from '../components/features/DestinationList';
import { fetchDestinations } from '../state/actions/destinationActions';
import { selectDestinations } from '../state/selectors/destinationSelectors';
import SelectSearchResults from '../components/features/SelectSearchResults';

const DestinationContainer = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <div>
      <h2>Agregar</h2>
      <DestinationForm />
      <h2>Busqueda</h2>
      <SelectSearchResults />
      <h2>Destinos turísticos</h2>
      <DestinationList destinations={destinations} />
    </div>
  );
};

export default DestinationContainer;
