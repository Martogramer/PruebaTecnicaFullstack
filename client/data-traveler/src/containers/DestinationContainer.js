import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DestinationForm from '../components/features/DestinationForm'
import { fetchDestinations } from '../state/actions/destinationActions';
import { selectDestinations } from '../state/selectors/destinationSelectors';
import styles from '../Global';
import DestinationSearchList from '../components/features/DestinationSearchList';

const DestinationContainer = ({ children }) => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <div className={`${styles.boxClass} ${styles.section} ${styles.bgGradient} ${styles.roundedXL} ${styles.shadowXL} ${styles.p4} `}>
      <div className={`${styles.mb4}`}>
        <DestinationForm />
      </div>
      <div className={`${styles.mb4} mt-4`}>
        <DestinationSearchList dest={destinations}/>
      </div>
    </div>
  );
};

export default DestinationContainer;
