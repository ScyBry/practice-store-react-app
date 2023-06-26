import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

import styles from './styles.module.scss';

export default function Routes() {
  const [activeRoute, setActiveRoute] = useState(0);
  return (
    <ul className={styles.root}>
      {ROUTES.map((obj, index) => (
        <NavLink to={obj.route} key={index}>
          <li onClick={() => setActiveRoute(index)}>{obj.name}</li>
        </NavLink>
      ))}
    </ul>
  );
}
