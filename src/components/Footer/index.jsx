import React from 'react';

import styles from './styles.module.scss';
import { WhiteLogo } from '..';

export default function index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <WhiteLogo></WhiteLogo>
      </div>
    </footer>
  );
}
