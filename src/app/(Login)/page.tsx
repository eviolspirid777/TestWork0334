'use client';

import { apiClient } from '@/api/ApiClient';
import { Button } from '@/shared/components/Button/ui';
import { FormSubmitDataType } from '@/shared/types/login/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';
import { useAuthStore } from '@/store/auth/useAuthStore';
import { useEffect } from 'react';

import styles from './page.module.scss';

export const formSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must satisfy minimal length(3 symbols)'),
  password: z
    .string()
    .min(3, 'Password must satisfy minimal length(3 symbols)'),
});

export type FormFields = z.infer<typeof formSchema>;

export default function Home() {
  const router = useRouter();

  const { setUser } = useAuthStore();

  useEffect(() => {
    setUser(null);
  }, []);

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      username: '',
    },
  });

  const submitData = async (data: FormSubmitDataType) => {
    try {
      const responseData = await apiClient.login(data);
      setUser(responseData);
      toast.success('Success!');
      router.push('home');
    } catch {
      toast.error('Error!');
    }
  };

  return (
    <>
      <form
        className={styles['form-display']}
        onSubmit={form.handleSubmit((data) => submitData(data))}
      >
        <h2>Login</h2>
        <div className={styles['input-group']}>
          <input
            type="text"
            placeholder="Username"
            {...form.register('username')}
          />
          {form.formState.errors.username && (
            <span className={styles['error-message']}>
              {form.formState.errors.username.message}
            </span>
          )}
        </div>
        <div className={styles['input-group']}>
          <input
            type="password"
            placeholder="Password"
            {...form.register('password')}
          />
          {form.formState.errors.password && (
            <span className={styles['error-message']}>
              {form.formState.errors.password.message}
            </span>
          )}
        </div>

        <Button buttonType="base" htmlType="submit">
          Login
        </Button>
      </form>
    </>
  );
}
