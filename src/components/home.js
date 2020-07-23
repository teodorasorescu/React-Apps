import React from 'react';
import styles from '../styling/home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.faunaContainer}>
        <div className={styles.text}>
          <Link to='/paintings'>Paintings</Link>
        </div>
      </div>
      <div className={styles.floraContainer}>
        <div className={styles.text}>
          <Link to='/sculptures'>Sculptures</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
