'use client';

import { useMediaQuery } from 'react-responsive';
import { Desktop } from './(Desktop)/Desktop';
import { Mobile } from './(Mobile)/Mobile';

const categories = [
  'Home',
  'Hot Deals',
  'Categories',
  'Laptops',
  'Smartphones',
  'Cameras',
  'Accessories',
];

export const Header = () => {
  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  return isMobile ? (
    <Mobile categories={categories} />
  ) : (
    <Desktop categories={categories} />
  );
};
