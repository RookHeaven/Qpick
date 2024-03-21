import {CartCard} from '../cartCard/CartCard.tsx';

import {FC, JSX} from 'react';

import {TCartList} from './types.ts';

import styles from './cartList.module.scss';


export const CartList: FC<TCartList> = ({products}) => {

  const items: JSX.Element[] = products
    .map(product => <CartCard key={product.id} product={product}/>
    )

  return (
    <ul className={styles.cart__list}>
      {items}
    </ul>
  );
};
