import { Button } from '../button/Button.tsx';

import { FC } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { IProduct } from '../../@types/types.ts';
import { TModalProduct } from './types.ts';

import { RootState } from '../../redux/store.ts';

import { addToCart } from '../../redux/slices/cart/cartSlice.ts';

import Star from '../../assets/icons/star.svg?react';

import styles from './modalProduct.module.scss';


export const ModalProduct: FC<TModalProduct> = ({ closeModal }) => {
  const modalProduct = useSelector((state: RootState) => state.modal.modalProduct);
  const products = useSelector((state: RootState) => state.cart.products);

  const dispatch = useDispatch();

  const isProductInCart: boolean = products.some(product => product.id === modalProduct?.id);

  const onAddProduct = (item: IProduct): void => {
    dispatch(addToCart(item));
  };

  return (
    modalProduct ? <div className={styles.info}>
      <Button isCloseModalButton={true}
              onClickCloseModalButton={closeModal}
              text={'Закрыть модальное окно'}
              type={'button'} />
      <div className={styles.info__left}>
        <img className={styles.info__img} src={modalProduct.img} alt={modalProduct.title} />
      </div>
      <div className={styles.info__right}>
        <div className={styles.info__wrapper}>
          <h3 className={styles.info__name}>{modalProduct.title}</h3>
          <div className={styles.info__rating}>
            <Star />
            <span className={styles.info__ratingText}>{modalProduct.rate}</span>
          </div>
          <div className={styles.info__price}>
            <span className={styles.info__priceNew}>{modalProduct.price} ₽</span>
            {modalProduct.priceOld ? <span className={styles.info__priceOld}>{modalProduct.priceOld} ₽</span> : null}
          </div>
        </div>
        {!isProductInCart ? <Button isCardButton={true}
                                    isModalCardButton={true}
                                    type={'button'}
                                    onClickCardButton={() => onAddProduct(modalProduct)}>Купить</Button> :
          <Link className={styles.info__link} onClick={closeModal} to={'/cart'}>В корзину</Link>}
      </div>
    </div> : null
  );
};
