import React from 'react';

import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import styles from './styles.module.scss';

export default function CountInput({ onClickPlus, onClickMinus, count }) {
  return (
    <div className={styles.countInput}>
      <IconButton onClick={onClickMinus} size="small" sx={{ border: '1px solid #0C76D8' }}>
        <RemoveIcon></RemoveIcon>
      </IconButton>
      <span>{count}</span>
      <IconButton onClick={onClickPlus} size="small" sx={{ border: '1px solid #0C76D8' }}>
        <AddIcon></AddIcon>
      </IconButton>
    </div>
  );
}
