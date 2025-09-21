'use client';

import { MdPerson } from 'react-icons/md';
import { Button } from '@/shared/components/Button/ui';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth/useAuthStore';

import styles from './AuthorizeButton.module.scss';

export const AutorizeButton = () => {
  const router = useRouter();

  const { user } = useAuthStore();

  const handleNavigate = (path: '/home' | '/') => {
    router.push(path);
  };

  return (
    <div className={styles.autorize}>
      <MdPerson className={styles.icon} />
      {user ? (
        <>
          <span>{`${user.firstName} ${user.lastName}`}</span>
          <Button buttonType="link" onClick={handleNavigate.bind(null, '/')}>
            Logout
          </Button>
        </>
      ) : (
        <Button buttonType="link" onClick={handleNavigate.bind(null, '/')}>
          Login
        </Button>
      )}
    </div>
  );
};
