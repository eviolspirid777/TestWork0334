import styles from './Header.module.scss';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AutorizeButton } from '../(AuthorizeButton)/AuthorizeButton';

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
          <div
            className={
              styles['header-block__references__information__telephone']
            }
          >
            <FaPhoneAlt className={styles.icon} />
            <span>+021-95-51-84</span>
          </div>
          <div
            className={styles['header-block__references__information__email']}
          >
            <IoMdMail className={styles.icon} />
            <span>shop@abelohost@.com</span>
          </div>
          <div
            className={styles['header-block__references__information__address']}
          >
            <BsFillGeoAltFill className={styles.icon} />
            <span>1734 Stonecoal Road</span>
          </div>
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
