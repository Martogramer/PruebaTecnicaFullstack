import React from 'react';

const DestinationList = ({ destinations }) => {
  return (
    <ul>
      {destinations.map((destination) => (
        <li key={destination.name}>{destination.name}</li>
      ))}
    </ul>
  );
};

export default DestinationList;
