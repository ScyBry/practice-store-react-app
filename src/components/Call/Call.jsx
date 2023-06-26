import React from 'react';
import { setPopup } from '../../redux/slices/popupSlice';

import styles from './styles.module.scss';
import { CallButton } from '..';
import { useDispatch, useSelector } from 'react-redux';

export default function Call() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.popup.open);

  return (
    <div className={styles.CallRoot}>
      <span>+7 7172 264 55 55</span>
      <CallButton dispatch={dispatch} open={open} setPopup={setPopup}></CallButton>
    </div>
  );
}
