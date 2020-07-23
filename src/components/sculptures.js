import React from 'react';
import styles from '../styling/sculptures.module.scss';
import { Link } from 'react-router-dom';

const Sculptures = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rodinContainer}>
        <div className={styles.text}>
          <Link to='/AugusteRodin'>Auguste Rodin</Link>
        </div>
      </div>
      <div className={styles.michelangeloContainer}>
        <div className={styles.text}>
          <Link to='/Michelangelo'>Michelangelo</Link>
        </div>
      </div>
      <div className={styles.brancusiContainer}>
        <div className={styles.text}>
          <Link to='/ConstantinBrancusi'>Constantin Brâncuși</Link>
        </div>
      </div>
      <div className={styles.albertoContainer}>
        <div className={styles.text}>
          <Link to='/AlbertoGiacometti'>Alberto Giacometti</Link>
        </div>
      </div>
      <div className={styles.donatelloContainer}>
        <div className={styles.text}>
          <Link to='/Donatello'>Donatello</Link>
        </div>
      </div>
    </div>
  );
};
export default  Sculptures;
