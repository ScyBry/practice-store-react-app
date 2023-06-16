import React from 'react';
import { CountInput } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

import styles from './styles.module.scss';

export default function CartItem({ id, image, name, price, count }) {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      }),
    );
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__container}>
        <div className={styles.item__img}>
          <img src={image} alt="" />
        </div>
        <h2 className={styles.item__title}>{name}</h2>
      </div>
      <div className={styles.cartItem__container}>
        <span className={styles.item__price}>{price}</span>
        <CountInput
          onClickRemove={onClickRemove}
          onClickPlus={onClickPlus}
          onClickMinus={onClickMinus}
          count={count}></CountInput>
      </div>
    </div>
  );
}
