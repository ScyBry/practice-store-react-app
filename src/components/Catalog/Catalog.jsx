import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Pagination } from '@mui/material';

import styles from './styles.module.scss';
import { Card, Skeleton, Category, ItemsShowInput } from '..';
import { fetchCards } from '../../redux/slices/card';
import { setCurrentPage } from '../../redux/slices/filterSlice';

export default function Catalog() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);
  const { categoryId, currentPage, limit, sort } = useSelector((state) => state.filter);

  const isCardLoading = cards.status === 'loading';

  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const sortBy = sort.sortProperty.replace('-', '');
  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

  console.log('Порядок' + order + ' ' + sortBy);

  useEffect(() => {
    dispatch(fetchCards(category, currentPage, limit, sortBy, order));
  }, [categoryId, currentPage, limit, sort]);

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
          <ItemsShowInput></ItemsShowInput>
        </div>
        <div className={styles.cardContainer}>
          {(isCardLoading ? [...Array(8)] : cards.items).map((item, index) =>
            isCardLoading ? (
              <Skeleton></Skeleton>
            ) : (
              <Card
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                characteristics_name={item.characteristics_name}
                characteristics_value={item.characteristics_value}
                price={item.price}
                rating={item.rating}></Card>
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
