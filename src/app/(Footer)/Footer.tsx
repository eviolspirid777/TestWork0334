'use client';

import dayjs from 'dayjs';
import styles from './Footer.module.scss';
import { useAuthStore } from '@/store/auth/useAuthStore';
import { useMediaQuery } from 'react-responsive';

export const Footer = () => {
  const { user } = useAuthStore();

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  return (
    <div
      className={`${styles['footer-block']} ${user ? styles['logged-in'] : styles['not-logged-in']} ${isMobile && styles['mobile']}`}
    >
      <span>{dayjs().year()}</span>
      {user?.email && <span>Logged as {user?.email}</span>}
    </div>
  );
};
