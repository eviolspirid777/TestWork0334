'use client';

import { apiClient } from '@/api/ApiClient';
import { Card } from '@/shared/components/Card/ui';
import { useProductsStore } from '@/store/products/useProductsStore';
import { useEffect, useState } from 'react';

import styles from './page.module.scss';
import { Loading } from '@/shared/components/Loading/Loading';

//TODO: Можно использовать серверную компоненту с запросами async function Page. Но это может дать нагрузку на сервер

export default function Page() {
  const { products, setProducts } = useProductsStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await apiClient.getProducts({
        limit: 12,
        skip: 0,
      });
      setProducts(data.products);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles['home-page']}>
      <h2>Latest Products</h2>
      <div className={styles['home-page__products']}>
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
