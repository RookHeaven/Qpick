import {Button} from '../button/Button.tsx';
import {QuantityButtons} from '../quantityButtons/QuantityButtons.tsx';

import {FC} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {addToCart} from '../../redux/slices/cart/cartSlice.ts';

import classNames from 'classnames';

import {TCard} from './types.ts';
import {IProduct} from '../../@types/types.ts';
import {RootState} from '../../redux/store.ts';

import Star from '../../assets/icons/star.svg?react';

import styles from './card.module.scss';


export const Card: FC<TCard> = ({item}) => {
  const products = useSelector((state: RootState) => state.cart.products)
  const dispatch = useDispatch();

  const productFromCart: IProduct | undefined = products.find(product => product.id === item.id);

  const onToggleProduct = (item: IProduct): void => {
    dispatch(addToCart(item));
  }

  return (
    <li className={classNames(styles.card, styles.catalog__item)}>
      <div className={styles.card__imgContainer}>
        <img className={styles.card__img} src={item.img} alt={item.title}/>
      </div>
      <div className={styles.card__description}>
        <div className={styles.card__descriptionTop}>
          <h3 className={styles.card__name}>{item.title}</h3>
          <div className={styles.card__price}>
            <span className={styles.card__priceNew}>{item.price} ₽</span>
            {item.priceOld ? <span className={styles.card__priceOld}>{item.priceOld} ₽</span> : null}
          </div>
        </div>
        <div className={styles.card__descriptionBottom}>
          <div className={styles.card__rating}>
            <Star/>
            <span className={styles.card__ratingText}>{item.rate}</span>
          </div>
          {!productFromCart || productFromCart.count === 0
            ? <Button isCardButton={true}
                      type={'button'}
                      onClickCardButton={() => onToggleProduct(item)}>Купить</Button>
            : <QuantityButtons product={productFromCart}/>}

        </div>
      </div>
    </li>
  );
};
