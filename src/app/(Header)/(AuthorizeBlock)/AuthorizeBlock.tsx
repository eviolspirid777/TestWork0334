'use client';

import { apiClient } from '@/api/ApiClient';
import { Button } from '@/shared/components/Button/ui';
import { Loading } from '@/shared/components/Loading/ui';
import { useAuthStore } from '@/store/auth/useAuthStore';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { MdPerson } from 'react-icons/md';
import { RouterType } from '@/shared/types/router/router';
import toast from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';

import styles from './AuthorizeBlock.module.scss';

type AuthorizeBlockProps = {
  onAuthorize?: () => void;
};

export const AuthorizeBlock: FC<AuthorizeBlockProps> = ({ onAuthorize }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname() as RouterType;

  const { user, setUser } = useAuthStore();

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  useEffect(() => {
    if (pathname !== '/') {
      (async () => {
        try {
          setLoading(true);
          const data = await apiClient.validateUser();
          setUser(data);
        } catch (ex) {
          toast.error('Error when invalidate user!');
        } finally {
          setLoading(false);
        }
      })();
    }
  }, []);

  const handleNavigate = (path: RouterType) => {
    onAuthorize?.();
    router.push(path);
  };

  return (
    <div className={`${styles.autorize} ${isMobile && styles.mobile}`}>
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
