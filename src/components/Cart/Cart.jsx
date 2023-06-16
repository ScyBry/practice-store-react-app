import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../../components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from './styles.module.scss';

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart__titleContainer}>
        <div className={styles.title}>
          <ShoppingCartIcon></ShoppingCartIcon>
          <h1>Корзина</h1>
        </div>
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
          />
        ))}
      </div>
    </div>
  );
}
