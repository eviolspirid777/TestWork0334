'use client';

import { useAuthStore } from '@/store/auth/useAuthStore';
import dayjs from 'dayjs';
import { useMediaQuery } from 'react-responsive';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { user } = useAuthStore();

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  //Q: Год выводить с сервера или с клиента?

  return (
    <div
      className={`${styles['footer-block']} ${user ? styles['logged-in'] : styles['not-logged-in']} ${isMobile && styles['mobile']}`}
    >
      <span>{dayjs().year()}</span>
      {user?.email && <span>Logged as {user?.email}</span>}
    </div>
  );
};
