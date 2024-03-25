import {Button} from '../button/Button.tsx';

import {FC} from 'react';

import {useDispatch} from 'react-redux';

import {addToCart, removeProduct} from '../../redux/slices/cart/cartSlice.ts';

import {TQuantityButtons} from './types.ts';
import {IProduct} from '../../@types/types.ts';

import styles from './quantityButtons.module.scss';


export const QuantityButtons: FC<TQuantityButtons> = ({product}) => {
  const dispatch = useDispatch();

  const onRemoveProduct = (item : IProduct): void => {
    dispatch(removeProduct(item));
  }

  const onAddProduct = (item: IProduct): void => {
    dispatch(addToCart(item));
  }

  return (
    <div className={styles.quantity}>
      <Button isQuantityButton={true}
              isIncreaseButton={false}
              type={'button'}
              onClickMinusButton={() => onRemoveProduct(product as IProduct)}
              text={'Убавить товар'}/>
      <span>{product?.count ?? 1}</span>
      <Button isQuantityButton={true}
              isIncreaseButton={true}
              type={'button'}
              onClickPlusButton={() => onAddProduct(product as IProduct)}
              text={'Добавить товар'}/>
    </div>
  );
};
