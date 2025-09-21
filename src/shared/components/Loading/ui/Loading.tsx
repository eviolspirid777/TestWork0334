import styles from './Loading.module.scss';

type LoadingProps = {
  color?: 'black' | 'white';
};

export const Loading = ({ color = 'black' }: LoadingProps) => {
  return (
    <div
      className={styles['loader']}
      style={{ '--data-color': color } as React.CSSProperties}
    />
  );
};
