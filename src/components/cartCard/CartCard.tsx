import { Button } from '../button/Button.tsx';
import { QuantityButtons } from '../quantityButtons/QuantityButtons.tsx';

import { FC } from 'react';

import { useDispatch } from 'react-redux';

import { removeFromCart } from '../../redux/slices/cart/cartSlice.ts';

import { TCartCard } from './types.ts';
import { IProduct } from '../../@types/types.ts';

import styles from './cartCard.module.scss';

export const CartCard: FC<TCartCard> = ({ product }) => {
  const dispatch = useDispatch();

  const formattedPrice: string = product.price.toLocaleString();
  const formattedPriceOld: string | null = product.priceOld ? product.priceOld.toLocaleString() : null;
  const formattedCardPrice: string = (product.price * (product.count ?? 0)).toLocaleString();

  const onRemoveProduct = (item: IProduct): void => {
    dispatch(removeFromCart(item));
  };

  return (
    <li className={styles.cartCard}>
      <div className={styles.cartCard__top}>
        <img className={styles.cartCard__img} src={product.img} alt={product.title} />
        <div className={styles.cartCard__description}>
          <p>{product.title}</p>
          <div className={styles.cartCard__price}>
            <span className={styles.cartCard__priceNew}>{formattedPrice} ₽</span>
            {product.priceOld ? <span className={styles.cartCard__priceOld}>{formattedPriceOld} ₽</span> : null}
          </div>
        </div>
      </div>
      <div className={styles.cartCard__bottom}>
        <QuantityButtons product={product} />
        <span>{formattedCardPrice} ₽</span>
      </div>
      <Button isRemoveButton={true}
              onClickRemoveButton={() => onRemoveProduct(product)}
              text={'Удалить из корзины'}
              type={'button'} />
    </li>
  );
};
