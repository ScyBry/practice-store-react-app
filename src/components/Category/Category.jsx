import React from 'react';
import { CATEGORIES } from '../../utils/constants';
import styles from './Styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';
import { Sort } from '../../components';

export default function Category() {
  const dispatch = useDispatch();

  const { categoryId } = useSelector((state) => state.filter);

  return (
    <>
      <ul className={styles.root}>
        {CATEGORIES.map((value, index) => (
          <li
            onClick={() => dispatch(setCategoryId(index))}
            className={styles.category && categoryId === index ? styles.activeCategory : ''}
            key={index}>
            {value}
          </li>
        ))}
      </ul>
      <Sort></Sort>
    </>
  );
}
