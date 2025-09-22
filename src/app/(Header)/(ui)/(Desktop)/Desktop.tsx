import { HeaderData } from '@/shared/components/HeaderData/ui';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AuthorizeBlock } from '../../(AuthorizeBlock)/AuthorizeBlock';
import { FC } from 'react';

import styles from './Desktop.module.scss';

type DesktopProps = {
  categories: string[];
};

export const Desktop: FC<DesktopProps> = ({ categories }) => {
  return (
    <div className={styles['header-block']}>
      <div className={styles['header-block__references']}>
        <div className={styles['header-block__references__information']}>
          <HeaderData
            icon={<FaPhoneAlt className={styles.icon} />}
            text="+021-95-51-84"
          />
          <HeaderData
            icon={<IoMdMail className={styles.icon} />}
            text="shop@abelohost@.com"
          />
          <HeaderData
            icon={<BsFillGeoAltFill className={styles.icon} />}
            text="1734 Stonecoal Road"
          />
        </div>
        <AuthorizeBlock />
      </div>
      <div className={styles['header-block__logo']} data-end-content=".">
        Abelohost Shop
      </div>
      <div className={styles['header-block__categories']}>
        {categories.map((category, key) => (
          <span key={key}>{category}</span>
        ))}
      </div>
    </div>
  );
};
