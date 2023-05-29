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
        <React.Fragment>
        <Link to={`/destinations/${destination._id}`}>
          <li key={destination._id} >{destination.name}</li>
        </Link> 
        <button onClick={() => handleDelete(destination._id)}>Delete</button>
      </React.Fragment>
      ))}
    </ul>
  );
};

export default DestinationList;
