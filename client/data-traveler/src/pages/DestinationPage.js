import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DestinationDetails from '../components/features/DestinationDetails';
import { selectDestinationById } from '../state/selectors/destinationSelectors';

const DestinationPage = () => {
  const { id } = useParams();
  const destination = useSelector((state) => selectDestinationById(state, id));

  if (!destination) {
    return <div>Cargando destino...</div>;
  }

  return (
    <div>
      <h2>{destination.name}</h2>
      <DestinationDetails destination={destination} />
    </div>
  );
};

export default DestinationPage;
