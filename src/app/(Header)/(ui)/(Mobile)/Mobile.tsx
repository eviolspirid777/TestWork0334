import { FC, useRef } from 'react';
import { AuthorizeBlock } from '../../(AuthorizeBlock)/AuthorizeBlock';

type MobileProps = {
  categories: string[];
};

export const Mobile: FC<MobileProps> = ({ categories }) => {
  const burgerMenuRef = useRef<HTMLInputElement>(null);

  const handleOnAuthorize = () => {
    burgerMenuRef.current?.click();
  };

  return (
    <div className="hamburger-menu">
      <input ref={burgerMenuRef} id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
        <li>
          <h2 className="menu__item">Abelohost Shop</h2>
        </li>
        <li>
          <AuthorizeBlock onAuthorize={handleOnAuthorize} />
        </li>
        {categories.map((category) => (
          <li key={category}>
            <a className="menu__item">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
