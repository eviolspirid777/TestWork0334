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
    <nav className="hamburger-menu" aria-label="Main navigation">
      <input
        ref={burgerMenuRef}
        id="menu__toggle"
        type="checkbox"
        aria-hidden="true"
      />
      <label
        className="menu__btn"
        htmlFor="menu__toggle"
        aria-controls="menu__list"
        aria-expanded={false}
      >
        <span></span>
      </label>
      <ul id="menu__list" className="menu__box" role="menu">
        <li role="none">
          <h2 className="menu__item">Abelohost Shop</h2>
        </li>
        <li role="none">
          <AuthorizeBlock onAuthorize={handleOnAuthorize} />
        </li>
        {categories.map((category) => (
          <li key={category} role="none">
            <a className="menu__item" role="menuitem" href="#">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
