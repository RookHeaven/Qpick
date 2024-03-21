import {FC} from 'react';

import {Link} from 'react-router-dom';

import classNames from 'classnames';

import styles from './emptyMessage.module.scss';

import img from './cart.gif';

export const EmptyMessage: FC = () => {
  return (
    <section className={classNames(styles.empty, 'container')}>
      <div className={classNames(styles.empty__container)}>
        <h2 className={styles.empty__title}>Корзина товаров <span>пуста</span></h2>
        <div className={styles.empty__inner}>
          <img className={styles.empty__image} src={img} alt='Пустая корзина'/>
        </div>
        <p>
          Похоже, что вы еще не добавили товары в корзину.<br/>
          Чтобы добавить товар, вернитесь на главную страницу.
        </p>
        <Link to={'/'} className={styles.empty__link}>Вернуться на главную страницу</Link>
      </div>
    </section>
  );
};
