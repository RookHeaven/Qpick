import { FC } from 'react';

import { Link } from 'react-router-dom';

import classNames from 'classnames';

import styles from './page404.module.scss';

import img from './404.gif';

export const Page404: FC = () => {
  return (
    <div className={styles.error}>
      <div className={classNames('container', styles.error__container)}>
        <img className={styles.error__image} src={img} alt='Ошибка 404' />
        <p className={styles.error__text}>К сожалению, этой страницы не существует</p>
        <Link to={'/'} className={styles.error__link}>Вернуться на главную страницу</Link>
      </div>
    </div>
  );
};
