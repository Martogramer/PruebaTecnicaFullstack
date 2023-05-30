import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDestinationByID } from '../../state/actions/destinationActions';


const DestinationList = ({ }) => {
  const dispatch = useDispatch();
  const destinationList = useSelector((state) => state.destinations);

  const handleDelete = (_id) => {
    dispatch(deleteDestinationByID(_id));
  };

  return (
    <ul>
      {destinationList.map((destination) => (
        <li key={destination._id} className="mb-2">
          <Link to={`/destinations/${destination._id}`} className="text-blue-500 hover:underline">
            {destination.name}
          </Link>
          <button
            onClick={() => handleDelete(destination._id)}
            className="ml-2 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DestinationList;
