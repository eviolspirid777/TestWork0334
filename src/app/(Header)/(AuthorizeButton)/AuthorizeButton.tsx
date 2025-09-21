'use client';

import { MdPerson } from 'react-icons/md';
import { Button } from '@/shared/components/Button/ui';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth/useAuthStore';
import { useEffect, useState } from 'react';
import { apiClient } from '@/api/ApiClient';
import { Loading } from '@/shared/components/Loading/ui';

import styles from './AuthorizeButton.module.scss';
import { RouterType } from '@/shared/types/router/router';

export const AutorizeButton = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname() as RouterType;

  const { user, setUser } = useAuthStore();

  useEffect(() => {
    if (pathname !== '/') {
      (async () => {
        setLoading(true);
        const data = await apiClient.validateUser();
        setUser(data);
        setLoading(false);
      })();
    }
  }, []);

  const handleNavigate = (path: RouterType) => {
    router.push(path);
  };

  return (
    <div className={styles.autorize}>
      {loading ? (
        <Loading color="white" />
      ) : (
        <>
          <MdPerson className={styles.icon} />
          {user ? (
            <>
              <span>{`${user.firstName} ${user.lastName}`}</span>
              <Button
                buttonType="link"
                onClick={handleNavigate.bind(null, '/')}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button buttonType="link" onClick={handleNavigate.bind(null, '/')}>
              Login
            </Button>
          )}
        </>
      )}
    </div>
  );
};
