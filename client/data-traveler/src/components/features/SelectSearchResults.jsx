import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations, searchDestination } from '../../state/actions/destinationActions';
import { selectSearchResults } from '../../state/selectors/destinationSelectors';
import styles from '../../Global';

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
      <div className={`${styles.mb4}`}>      
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search destinations"
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
      />
      
      <ul>
        {filteredResults && filteredResults.map((destinations) => (
          <li key={destinations._id}>{destinations.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectSearchResults;
