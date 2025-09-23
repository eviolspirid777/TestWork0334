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
        <address className={styles['header-block__references__information']}>
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
        </address>
        <AuthorizeBlock />
      </div>
      <div className={styles['header-block__logo']}>Abelohost Shop</div>
      <nav
        className={styles['header-block__categories']}
        aria-label="Main navigation"
      >
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <a role="link">{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
