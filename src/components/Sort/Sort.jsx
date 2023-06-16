import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';
import { SORT_OPTIONS } from '../../utils/constants';

import styles from './styles.module.scss';

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const sortRef = useRef();

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.path.includes(sortRef.current)) {
  //       setOpen(false);
  //     }
  //   };
  //   document.body.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.body.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  return (
    <div ref={sortRef} className="Sort">
      <div className={styles.sort}>
        <div className={styles.sort__label}>
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {open && (
          <div className={styles.sort__popup}>
            <ul>
              {SORT_OPTIONS.map((obj, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => onClickListItem(obj)}
                    className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                    {obj.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
