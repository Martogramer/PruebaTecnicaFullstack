import React from 'react';
import DestinationContainer from '../containers/DestinationContainer';
import styles from '../Global';

const Home = () => {
  return (
    <div className={`${styles.section} ${styles.flexWrap}`}>
      <DestinationContainer />
    </div>
  );
};

export default Home;
