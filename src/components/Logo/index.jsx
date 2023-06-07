import React from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

import LogoIcon from '../../Assets/logoMouse.svg';

export default function index() {
  return (
    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <div className={styles.root}>
        <div className={styles.iconContainer}>
          <img src={LogoIcon} alt="" />
        </div>
        <div className={styles.textContainer}>
          <b>Гаджетариум</b>
          <span>Магазин цифровых решений </span>
        </div>
      </div>
    </NavLink>
  );
}
