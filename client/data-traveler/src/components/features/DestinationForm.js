import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDestination } from '../../state/actions/destinationActions';


const DestinationForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
   const newDestination = {
      name,
      description,
    };
    dispatch(addDestination(newDestination));
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit">Add Destination</button>
      </form>
  );
};

export default DestinationForm;
