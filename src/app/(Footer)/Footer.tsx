'use client';

import dayjs from 'dayjs';
import styles from './Footer.module.scss';
import { useAuthStore } from '@/store/auth/useAuthStore';

export const Footer = () => {
  const { user } = useAuthStore();
  return (
    <div
      className={styles['footer-block']}
      style={{
        height: user ? '10vh' : '5vh',
      }}
    >
      <span>{dayjs().year()}</span>
      {user?.email && <span>Logged as {user?.email}</span>}
    </div>
  );
};
