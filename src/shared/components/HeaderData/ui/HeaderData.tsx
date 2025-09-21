import { FC, ReactNode } from 'react';

import styles from './HeaderData.module.scss';

type HeaderDataType = {
  icon: ReactNode;
  text: string;
};

export const HeaderData: FC<HeaderDataType> = ({ icon, text }) => {
  return (
    <div className={styles['header-data']}>
      {icon}
      <span>{text}</span>
    </div>
  );
};
