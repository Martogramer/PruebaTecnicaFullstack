import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations, searchDestination } from '../../state/actions/destinationActions';
import { selectSearchResults } from '../../state/selectors/destinationSelectors';

const SelectSearchResults = ({ }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector((selectSearchResults));
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(searchDestination(searchTerm));
  }, [dispatch, searchTerm]);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredResults = searchResults.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search destinations"
      />

      <ul>
        {filteredResults && filteredResults.map((destinations) => (
          <li key={destinations.id}>{destinations.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectSearchResults;
