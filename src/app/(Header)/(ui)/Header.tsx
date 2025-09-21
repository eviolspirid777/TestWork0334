import styles from './Header.module.scss';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AutorizeButton } from '../(AuthorizeButton)/AuthorizeButton';
import { HeaderData } from '@/shared/components/HeaderData/ui';

const categories = [
  'Home',
  'Hot Deals',
  'Categories',
  'Laptops',
  'Smartphones',
  'Cameras',
  'Accessories',
];

export const Header = () => {
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
        <AutorizeButton />
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
