'use client';

import { useAuthStore } from '@/store/auth/useAuthStore';

export const LoggedAs = () => {
  const { user } = useAuthStore();

  if (!user) return null;

  return <span>Logged as {user.email}</span>;
};
