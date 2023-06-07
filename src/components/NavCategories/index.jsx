import React from 'react';
import { Link } from 'react-router-dom';

import { NavCategories } from '../../utils/constants';
import styles from './Styles.module.scss';

export default function index() {
  return (
    <div className={styles.root}>
      {NavCategories.map((obj, index) => (
        <Link key={index}>
          <span>{obj}</span>
        </Link>
      ))}
    </div>
  );
}
