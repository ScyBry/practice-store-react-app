import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Pagination } from '@mui/material';

import styles from './styles.module.scss';
import { Card, Skeleton, Category } from '..';
import { fetchCards } from '../../redux/slices/card';
import { setCurrentPage } from '../../redux/slices/filterSlice';

export default function Catalog() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);
  const { categoryId, currentPage, limit } = useSelector((state) => state.filter);

  const isCardLoading = cards.status === 'loading';

  const category = categoryId > 0 ? `category=${categoryId}` : '';

  useEffect(() => {
    dispatch(fetchCards(category, currentPage, limit));
  }, [categoryId, currentPage, limit]);

  const handleChange = (event, value) => {
    dispatch(setCurrentPage(value));
  };

  return (
    <section className={styles.catalogRoot}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogFilter_container}>
          <div className={styles.catalog__title}>
            <h2>Каталог товаров</h2>
          </div>
          <Category></Category>
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
        <Pagination
          sx={{ marginTop: '30px' }}
          count={10}
          color="primary"
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}
