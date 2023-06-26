import React from 'react';
import { CountInput } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

import { IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import styles from './styles.module.scss';

export default function CartItem({ id, image, name, price, count, itemPrice }) {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
        price,
      }),
    );
  };

  const onClickMinus = () => {
    dispatch(
      minusItem({
        id,
        price,
      }),
    );
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
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
        <CountInput
          onClickPlus={onClickPlus}
          onClickMinus={onClickMinus}
          count={count}></CountInput>
        <span className={styles.item__price}>{itemPrice} грн.</span>
        <IconButton onClick={() => onClickRemove()}>
          <RemoveCircleOutlineIcon fontSize="large"></RemoveCircleOutlineIcon>
        </IconButton>
      </div>
    </div>
  );
}
