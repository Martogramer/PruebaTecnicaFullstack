import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchDestination } from '../../state/actions/destinationActions';

const SelectSearchResults = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.destinations.searchResults);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(searchDestination(searchTerm));
  }, [dispatch, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search destinations"
      />

      <ul>
        {searchResults && searchResults.map((destination) => (
          <li key={destination.id}>{destination.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectSearchResults;
