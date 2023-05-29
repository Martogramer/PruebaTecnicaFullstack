import React from 'react';

const DestinationDetails = ({ destination }) => {
  return (
    <div class="md:flex">
      <h2>{destination.name}</h2>
      <p>{destination.description}</p>
    </div>
  );
};

export default DestinationDetails;
