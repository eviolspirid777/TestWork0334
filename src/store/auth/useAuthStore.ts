import { LoginResponse } from '@/shared/types/api/responses/login/LoginResponse';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type AuthStoreStates = {
  user: LoginResponse | null;
};

type AuthStoreActions = {
  setUser: (user: LoginResponse | null) => void;
};

type AuthStore = AuthStoreStates & AuthStoreActions;

export const useAuthStore = create<AuthStore>()(
  devtools(
    (set) => ({
      // State
      user: null,

      //Actions
      setUser: (user) =>
        set((state) => ({
          ...state,
          user,
        })),
    }),
    { name: 'AuthStore' }
  )
);
