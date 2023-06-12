import React from 'react';
import { Logo, Category, Call } from '../index';

import styles from './Styles.module.scss';

export default function index() {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Logo></Logo>
        <Category></Category>
        <Call></Call>
      </div>
    </nav>
  );
}
