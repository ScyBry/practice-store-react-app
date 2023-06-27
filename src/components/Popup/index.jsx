import React from 'react';
import styles from './styles.module.scss';
import { TextField, IconButton, Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';

export default function index({ dispatch, setPopup, open }) {
  return (
    <div className={open ? styles.popupBg : styles.hide}>
      <div className={styles.popup__content}>
        <IconButton
          onClick={() => dispatch(setPopup(!open))}
          sx={{ position: 'absolute', top: '5px', right: '5px' }}>
          <CloseIcon></CloseIcon>
        </IconButton>
        <h3>Заказать звонок</h3>
        <TextField
          sx={{ width: '100%' }}
          variant="standard"
          label="Введите номер телефона"></TextField>
        <Button sx={{ width: '100%' }} startIcon={<CallIcon></CallIcon>} variant="contained">
          Заказать звонок
        </Button>
      </div>
    </div>
  );
}
