'use client';

import { useMediaQuery } from 'react-responsive';
import { Desktop } from './(Desktop)/Desktop';
import { Mobile } from './(Mobile)/Mobile';
import { Toaster } from 'react-hot-toast';

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

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'white',
            color: 'black',
            border: '1px solid black',
          },
        }}
      />
      {isMobile ? (
        <Mobile categories={categories} />
      ) : (
        <Desktop categories={categories} />
      )}
    </>
  );
};
