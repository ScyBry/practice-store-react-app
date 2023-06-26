import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../components';
import { clearItems } from '../../redux/slices/cartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './styles.module.scss';
import { Button } from '@mui/material';

export default function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const onClickClear = () => {
    dispatch(clearItems());
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart__titleContainer}>
        <div className={styles.title}>
          <ShoppingCartIcon></ShoppingCartIcon>
          <h1>Корзина</h1>
        </div>
        <Button
          variant="outlined"
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={() => onClickClear()}
          startIcon={<DeleteIcon></DeleteIcon>}>
          Очистить корзину
        </Button>
      </div>
      <div className={styles.items__container}>
        {items.map((item, index) => (
          <CartItem
            key={index}
            id={item.id}
            name={item.name}
            count={item.count}
            image={item.image}
            price={item.price}
            itemPrice={item.itemPrice}
          />
        ))}
      </div>
      <div className={styles.totalPrice__container}></div>
    </div>
  );
}
