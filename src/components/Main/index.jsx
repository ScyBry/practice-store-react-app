import React from 'react';

import MainScreenImg from '../../Assets/mainScreen.png';
import styles from './styles.module.scss';
import { CatalogButton } from '../../components';

export default function index() {
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <div className={styles.main_column}>
          <div className={styles.main__title}>
            <h1>
              Яркие гаджеты
              <br /> на любой вкус и день
            </h1>
          </div>
          <div className={styles.main__text}>
            <p>
              Мы собрали лучшие гаджеты от лучших<br></br> брендов, чтобы порадовать вас свежими
              <br></br> новинками digital-рынка.
            </p>
          </div>
          <CatalogButton></CatalogButton>
        </div>
        <img style={{ position: 'absolute', right: '0px' }} src={MainScreenImg} alt="" />
      </div>
    </div>
  );
}
