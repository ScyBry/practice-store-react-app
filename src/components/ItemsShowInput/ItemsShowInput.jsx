import { FormControl, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { setLimit } from '../../redux/slices/filterSlice';

export default function ItemsShowInput() {
  const dispatch = useDispatch();

  const { limit } = useSelector((state) => state.filter);

  const handleChange = (event) => {
    dispatch(setLimit(event.target.value));
  };
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={limit}
        defaultValue={limit}
        onChange={handleChange}>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </FormControl>
  );
}
