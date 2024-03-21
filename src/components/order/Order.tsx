import {Button} from '../button/Button.tsx';

import {FC} from 'react';

import {useSelector} from 'react-redux';

import {RootState} from '../../redux/store.ts';

import styles from './order.module.scss';


export const Order: FC = () => {
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice.toLocaleString())

  return (
    <div className={styles.order}>
      <div className={styles.order__details}>
        <span>ИТОГО</span>
        <span>₽ {totalPrice}</span>
      </div>
      <Button isOrderButton={true}>Перейти к оформлению</Button>
    </div>
  );
};
