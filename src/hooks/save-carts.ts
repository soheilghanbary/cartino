'use client';
import { useEffect } from 'react';
import { useCartStore } from './use-cart';

export const SaveCarts = () => {
  const carts = useCartStore((state) => state.carts);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      carts.length
        ? window.localStorage.setItem('carts', JSON.stringify(carts))
        : window.localStorage.removeItem('carts');
    }
  }, [carts]);

  return null;
};
