'use client';

import { apiClient } from '@/api/ApiClient';
import { Card } from '@/shared/components/Card/ui';
import { useProductsStore } from '@/store/products/useProductsStore';
import { useEffect, useState } from 'react';
import { Loading } from '@/shared/components/Loading/ui';

import styles from './page.module.scss';
import { useMediaQuery } from 'react-responsive';

//TODO: Можно использовать серверную компоненту с запросами async function Page. Но это может дать нагрузку на сервер

export default function Page() {
  const { products, setProducts } = useProductsStore();
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

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
    <section className={styles['home-page']} aria-labelledby="home-title">
      <h2>Latest Products</h2>
      <ul
        className={`${styles['home-page__products']} ${isMobile && styles.mobile}`}
      >
        {products?.map((product) => (
          <li key={product.id}>
            <Card product={product} isMobile={isMobile} />
          </li>
        ))}
      </ul>
    </section>
  );
}
