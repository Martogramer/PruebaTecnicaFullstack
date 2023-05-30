import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDestinations, searchDestination, deleteDestinationByID } from '../../state/actions/destinationActions';
import { selectDestinations, selectSearchResults } from '../../state/selectors/destinationSelectors';
import styles from '../../Global';
import { TrashIcon, SearchIcon } from '@heroicons/react/solid';

const DestinationSearchList = ({ dest }) => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations);
  const searchResults = useSelector(selectSearchResults);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  const closePopup = () => {
    setSelectedDestination(null);
  };

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchDestination(searchTerm));
  }, [dispatch, searchTerm]);

  const filteredResults = searchResults.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())

  );
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const handleDelete = (_id) => {
    dispatch(deleteDestinationByID(_id));
    dispatch(fetchDestinations());
  };

  useEffect(() => {
    const updatedResults = searchResults.filter((destination) =>
      destinations.find((item) => item._id === destination._id)
    );
    setFiltered(updatedResults);
  }, [destinations, searchResults]);


  return (
    <div className={`${styles.maxWMd} ${styles.mxAuto} ${styles.bgWhite} ${styles.roundedXL} ${styles.shadowMd} ${styles.p4} mr-2 ml-2`}>
      <div className={`${styles.mb4}`}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search destinations"
          className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
      </div>
      <ul>
        {filteredResults.map((destination) => (
          <li key={destination._id} className={`${styles.mb2}`}>
            <Link
              className="text-blue-500 hover:underline"
              onClick={() => handleDestinationClick(destination)}
            >
              {destination.name}
            </Link>
            <button
              onClick={() => handleDelete(destination._id)}
              className="ml-2 mb-1 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              <TrashIcon className="w-6 h-6 text-red-500" />
            </button>
          </li>
        ))}
      </ul>

      {selectedDestination && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-700 opacity-50 z-10" onClick={closePopup} />
          <div className={`${styles.maxWMd} ${styles.mxAuto} ${styles.bgWhite} ${styles.roundedXL} ${styles.shadowMd} ${styles.p4} z-20`}>
            <h2 className="text-xl font-bold mb-4">{selectedDestination.name}</h2>
            <p>{selectedDestination.description}</p>
            
            {selectedDestination.images && (
              <img
                src={selectedDestination.images}
                alt="Destination"
                className={`${styles.my4} ${styles.maxWFull} ${styles.hAuto}`}
              />
            )}

            <button
              className="mt-4 px-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Edit
            </button>
            <button
              onClick={closePopup}
              className="mt-4 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationSearchList;
