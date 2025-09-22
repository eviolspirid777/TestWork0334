import { LoggedAs } from './(LoggedAs)/LoggedAs';

import styles from './Footer.module.scss';

export const Footer = () => {
  //Q: Год выводить с сервера или с клиента?
  const date = new Date().getFullYear().toFixed();

  return (
    <div className={styles['footer-block']}>
      <span>{date}</span>
      <LoggedAs />
    </div>
  );
};
