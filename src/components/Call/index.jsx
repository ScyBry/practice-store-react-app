import React from 'react';

import styles from './styles.module.scss';
import { CallButton } from '..';

export default function index() {
  return (
    <div className={styles.CallRoot}>
      <span>+7 7172 264 55 55</span>
      <CallButton></CallButton>
    </div>
  );
}
