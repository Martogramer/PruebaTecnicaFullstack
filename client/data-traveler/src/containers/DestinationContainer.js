import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DestinationForm from '../components/features/DestinationForm'
import DestinationList from '../components/features/DestinationList';
import { fetchDestinations } from '../state/actions/destinationActions';
import { selectDestinations } from '../state/selectors/destinationSelectors';
import SelectSearchResults from '../components/features/SelectSearchResults';
import styles from '../Global';
import DestinationSearchList from '../components/features/DestinationSearchList';

const DestinationContainer = ({ children }) => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <div className={`${styles.boxClass} ${styles.section} ${styles.bgGradient} ${styles.roundedXL} ${styles.shadowMD} ${styles.p4} `}>
      <div className={`${styles.mb4}`}>
        <DestinationForm />
      </div>
      <div className={`${styles.mb4} mt-4`}>
        <DestinationSearchList dest={destinations}/>
        {/* <SelectSearchResults /> */}
      </div>
      {/* <h2 className={`${styles.textXL} ${styles.fontBold} ${styles.mb4}`}>Destinos turísticos</h2>
      <DestinationList /> */}
    </div>
  );
};

export default DestinationContainer;
