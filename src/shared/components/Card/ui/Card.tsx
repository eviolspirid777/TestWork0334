import Image from 'next/image';
import { Product } from '@/shared/types/products/Product';
import { useAuthStore } from '@/store/auth/useAuthStore';
import { FC } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { Button } from '../../Button/ui';

import styles from './Card.module.scss';

type CardProps = {
  product: Product;
};

export const Card: FC<CardProps> = ({ product }) => {
  const { user } = useAuthStore();

  return (
    <div className={styles['card-container']}>
      <Image
        className={styles['card-container__image']}
        src={product.images[0]}
        alt={product.title}
        width={300}
        height={400}
      />
      <strong className={styles['card-container__title']}>
        {product.title}
      </strong>
      <span className={styles['card-container__category']}>
        {product.category}
      </span>
      <span className={styles['card-container__price']}>${product.price}</span>
      {user && (
        <Button className={styles['card-container__button']}>
          <FaCartShopping />
          <span>Add to cart</span>
        </Button>
      )}
    </div>
  );
};
