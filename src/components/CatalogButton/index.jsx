import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

export default function () {
  return (
    <NavLink to="/catalog">
      <button className={styles.root}>Смотреть каталог</button>
    </NavLink>
  );
}
