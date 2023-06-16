import React from 'react';
import { Logo, Category, Call, CartIcon } from '../index';

import styles from './Styles.module.scss';

export default function index() {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Logo></Logo>
        <Call></Call>
        <CartIcon></CartIcon>
      </div>
    </nav>
  );
}
