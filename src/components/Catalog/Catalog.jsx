import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './styles.module.scss';
import { Card, Skeleton } from '..';
import { fetchCards } from '../../redux/slices/card';

export default function Catalog() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);

  const isCardLoading = cards.status === 'loading';

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  console.log(cards);

  return (
    <section className={styles.catalogRoot}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalog__title}>
          <h2>Каталог товаров</h2>
        </div>
        <div className={styles.cardContainer}>
          {(isCardLoading ? [...Array(5)] : cards.items).map((item, index) =>
            isCardLoading ? (
              <Skeleton></Skeleton>
            ) : (
              <Card
                key={index}
                index={index}
                name={item.name}
                image={item.image}
                characteristics_name={item.characteristics_name}
                characteristics_value={item.characteristics_value}
                price={item.price}></Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
