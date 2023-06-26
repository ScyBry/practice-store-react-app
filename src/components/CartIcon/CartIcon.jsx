import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartIcon() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <NavLink style={{ display: 'flex', alignItems: 'center', gap: '10px' }} to="/cart">
      <Badge badgeContent={items.length} color="primary">
        <ShoppingCartIcon color="action" fontSize="large" />
      </Badge>
      <span
        style={{
          fontWeight: 700,
          fontSize: '12px',
          lineHeight: '15px',
          color: '#2a2d46',
          transition: '0.3s',
        }}>
        {totalPrice} грн
      </span>
    </NavLink>
  );
}
