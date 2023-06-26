import React, { useState, useEffect } from 'react';
import { Logo, Category, Call, CartIcon, Routes } from '../index';

import styles from './Styles.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Logo></Logo>
        <Routes></Routes>
        <Call></Call>
        <CartIcon></CartIcon>
      </div>
    </nav>
  );
}
