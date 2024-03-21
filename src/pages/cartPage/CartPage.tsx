import {CartList} from '../../components/cartList/CartList.tsx';
import {Order} from '../../components/order/Order.tsx';
import {EmptyMessage} from '../../components/emptyMessage/EmptyMessage.tsx';

import {FC} from 'react';

import {useSelector} from 'react-redux';

import {RootState} from '../../redux/store.ts';

import classNames from 'classnames';

import styles from './cartPage.module.scss';

export const CartPage: FC = () => {
  const products = useSelector((state: RootState) => state.cart.products)

  if (products.length === 0) {
    return (
      <main className={classNames('inner')}>
        <EmptyMessage/>
      </main>
    )
  }

  return (
    <main>
      <section className={styles.cart}>
        <div className={'container'}>
          <h2 className={styles.cart__title}>Корзина</h2>
          <div className={styles.cart__wrapper}>
            <CartList products={products}/>
            <Order/>
          </div>
        </div>
      </section>
    </main>
  );
};
