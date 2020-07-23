import React from 'react';
import styles from '../styling/paintings.module.scss';
import { Link } from 'react-router-dom';


const Paintings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.goghContainer}>
        <div className={styles.text}>
          <Link to='/VincentVanGogh'>Vincent Van Gogh</Link>
        </div>
      </div>
      <div className={styles.monetContainer}>
        <div className={styles.text}>
          <Link to='/ClaudeMonet'>Claude Monet</Link>
        </div>
      </div>
      <div className={styles.picassoContainer}>
        <div className={styles.text}>
          <Link to='/PabloPicasso'>Pablo Picasso</Link>
        </div>
      </div>
      <div className={styles.davinciContainer}>
        <div className={styles.text}>
          <Link to='/LeonardoDaVinci'>Leonardo da Vinci</Link>
        </div>
      </div>
      <div className={styles.gustavContainer}>
        <div className={styles.text}>
          <Link to='/GustavKlimt'>Gustav Klimt</Link>
        </div>
      </div>
    </div>
  );
};
export default  Paintings;
