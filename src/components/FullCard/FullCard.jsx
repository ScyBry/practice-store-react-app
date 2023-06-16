import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import axios from '../../axios';

import styles from './style.module.scss';
import { Button, Rating } from '@mui/material';

export default function FullCard() {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log("s'kgfd" + id);

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/items/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert('Ошибка при получении');
      });
  }, []);

  const onClickAdd = () => {
    const item = {
      id,
      name: data.name,
      price: data.price,
      image: data.image,
    };
    dispatch(addItem(item));
  };

  if (isLoading) {
    return <>Загружается</>;
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetails_container}>
        <div className={styles.productDetails_container__column}>
          <img src={data.image} />
        </div>
        <div className={styles.productDetails_container__column}>
          <div className={styles.column__cardName}>
            <h3>{data.name}</h3>
          </div>
          <div className={styles.column__characteristics}>
            <ul className={styles.characteristics__name}>
              {data.characteristics_name.map((value, index) => (
                <li key={index}>{value}:</li>
              ))}
            </ul>
            <ul className={styles.characteristics__value}>
              {data.characteristics_value.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
          <Rating value={data.rating}></Rating>
          <Button onClick={onClickAdd} variant="contained">
            ДОБАВИТЬ В КОРЗИНУ
          </Button>
        </div>
      </div>
    </div>
  );
}
