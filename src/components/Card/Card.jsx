import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';
import ButtonIcon from './button-icon.png';

export default function Card({
  index,
  name,
  image,
  characteristics_name,
  characteristics_value,
  price,
}) {
  return (
    <NavLink to={`/card/${index}`}>
      <div className={styles.cardRoot}>
        <div className={styles.card__title}>{name}</div>
        <div className={styles.card__image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.columns}>
          <ul>
            {characteristics_name.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <ul>
            {characteristics_value.map((value, index) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
        <div className={styles.cardBottom}>
          <span className={styles.cardBottom__price}>{price} грн</span>
          <button>
            <img src={ButtonIcon} alt="" />
          </button>
        </div>
      </div>
    </NavLink>
  );
}
