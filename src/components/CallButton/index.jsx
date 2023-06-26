import React from 'react';

import styles from './styles.module.scss';

export default function index({ dispatch, setPopup, open }) {
  return (
    <button onClick={() => dispatch(setPopup(!open))} className={styles.root}>
      Заказать звонок
    </button>
  );
}
