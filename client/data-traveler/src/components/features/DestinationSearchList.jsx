import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDestinations, searchDestination, deleteDestinationByID } from '../../state/actions/destinationActions';
import { selectSearchResults } from '../../state/selectors/destinationSelectors';
import styles from '../../Global';

const DestinationSearchList = ({ dest }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const [searchTerm, setSearchTerm] = useState('');
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
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
