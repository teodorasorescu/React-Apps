import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styling/header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to='/'>
        Art's Home
      </Link>
      <Link className={styles.link} to='/paintings'>
        Paintings
      </Link>
      <Link className={styles.link} to='/sculptures'>
        Sculptures
      </Link>
    </div>
  );
};
export default Header;
