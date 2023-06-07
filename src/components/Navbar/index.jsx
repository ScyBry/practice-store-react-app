import React from 'react';
import { Logo, NavCategories, Call } from '../index';

import styles from './Styles.module.scss';

export default function index() {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Logo></Logo>
        <NavCategories></NavCategories>
        <Call></Call>
      </div>
    </nav>
  );
}
