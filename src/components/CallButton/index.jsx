import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

export default function index() {
  return (
    <NavLink to="">
      <button className={styles.root}>Заказать звонок</button>
    </NavLink>
  );
}
