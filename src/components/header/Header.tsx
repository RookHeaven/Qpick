import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { FC, JSX } from 'react';

import Heart from '../../assets/icons/heart.svg?react';
import Cart from '../../assets/icons/cart.svg?react';

import { ILink } from './types.ts';
import { RootState } from '../../redux/store.ts';

import classNames from 'classnames';

import styles from './header.module.scss';

const links: ILink[] = [
  {
    icon: <Heart />,
    title: 'Избранное',
    to: '',
  },
  {
    icon: <Cart />,
    title: 'Корзина',
    to: '/cart',
  },
];

export const Header: FC = () => {
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);

  const items: JSX.Element[] = links.map(item => (
    <li key={item.title} className={styles.header__buttonItem}>
      <Link to={item.to} className={styles.header__link} title={item.title} aria-label={item.title}>
        {item.icon}
        <span className={styles.header__iconSum}>{item.title === 'Корзина' ? totalCount : 2}
        </span>
      </Link>
    </li>
  ));

  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.header__container)}>
        <Link className={styles.header__logo} to='/'>
          <h1 className={'visually-hidden'}>Интернет магазин аудио аксессуаров</h1>
          QPICK
        </Link>
        <ul className={styles.header__buttonsList}>
          {items}
        </ul>
      </div>
    </header>
  );
};
