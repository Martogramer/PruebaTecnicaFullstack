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
    <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
        <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Add Destination</button>
      </form>
  );
};

export default DestinationForm;
