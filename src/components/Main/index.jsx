import React from 'react';

import styles from './styles.module.scss';

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
        </div>
      </div>
    </div>
  );
}
