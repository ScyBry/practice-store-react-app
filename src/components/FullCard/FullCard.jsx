import React, { useState, useEffect } from 'react';
import axios from '../../axios';

import styles from './style.module.scss';
import { useParams } from 'react-router-dom';

export default function FullCard() {
  const { id } = useParams();
  console.log(id);

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

  if (isLoading) {
    return <>Загружается</>;
  }

  return (
    <div className={styles.fullCardRoot}>
      <div className={styles.fullCard__column}>
        <img src={data.image} alt="" />
      </div>
      <div className={styles.fullCard__column}>
        <div classname={styles.columnCharacteristicsContainer}>
          <ul>
            {data.characteristics_name.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <ul>
            {data.characteristics_value.map((value, index) => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
