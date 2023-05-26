import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDestinations } from '../state/actions/destinationActions';

const useDestinations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);
};

export default useDestinations;
