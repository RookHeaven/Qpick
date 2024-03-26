import { Button } from '../button/Button.tsx';

import Modal from 'react-modal';

import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { IForm } from './types.ts';

import { closeModal, openModal } from '../../redux/slices/modal/modalSlice.ts';

import { RootState } from '../../redux/store.ts';

import styles from './order.module.scss';

export const Order: FC = () => {
  const initialValues: IForm = { cardNumber: '', expiryDate: '', cvv: '' };

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice.toLocaleString());
  const modalIsOpen = useSelector((state: RootState) => state.modal.modalIsOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const onOpenModal = (): void => {
    dispatch(openModal(true));
  };

  const onCloseModal = (): void => {
    dispatch(closeModal(false));
  };

  const validateForm = (values: IForm) => {
    const errors: IForm = {};
    if (!values.cardNumber) {
      errors.cardNumber = 'Поле обязательно к заполнению';
    } else if (
      !/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(values.cardNumber)
    ) {
      errors.cardNumber = 'Неправильно заполненное поле';
    }

    if (!values.expiryDate) {
      errors.expiryDate = 'Поле обязательно к заполнению';
    } else if (
      !/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(values.expiryDate)
    ) {
      errors.expiryDate = 'Неправильно заполненное поле';
    }

    if (!values.cvv) {
      errors.cvv = 'Поле обязательно к заполнению';
    } else if (
      !/^[0-9]{3,4}$/.test(values.cvv)
    ) {
      errors.cvv = 'Неправильно заполненное поле';
    }

    return errors;
  };


  return (
    <div className={styles.order}>
      <div className={styles.order__details}>
        <span>ИТОГО</span>
        <span>₽ {totalPrice}</span>
      </div>
      <Button isOrderButton={true}
              onClickOrderButton={onOpenModal}
              type={'button'}>Перейти к оформлению</Button>
      <Modal isOpen={modalIsOpen}
             onRequestClose={onCloseModal}
             className={'modal'}
             overlayClassName={'overlay'}
             closeTimeoutMS={500}>
        <Formik initialValues={initialValues}
                validate={validateForm}
                onSubmit={values => {
                  console.log(values);

                  dispatch(closeModal(false));
                }}>
          <Form className={styles.form}
                method={'POST'}>
            <Button isCloseModalButton={true}
                    onClickCloseModalButton={onCloseModal}
                    text={'Закрыть модальное окно'}
                    type={'button'} />
            <h2>Введите данные вашей карты</h2>
            <div className={styles.form__wrapper}>
              <div className={styles.form__cardNumber}>
                <label className={'visually-hidden'}
                       htmlFor={'cardNumber'}>Введите номер карты</label>
                <Field
                  type={'number'}
                  id={'cardNumber'}
                  name={'cardNumber'}
                  placeholder={'Номер карты'}
                />
                <ErrorMessage name={'cardNumber'}
                              component={'p'}
                              className={styles.form__error} />
              </div>
              <div className={styles.form__input}>
                <label className={'visually-hidden'}
                       htmlFor={'expiryDate'}>Введите срок действия карты</label>
                <Field
                  type={'text'}
                  id={'expiryDate'}
                  name={'expiryDate'}
                  placeholder={'ММ/ГГ'}
                />
                <ErrorMessage name={'expiryDate'}
                              component={'p'}
                              className={styles.form__error} />
              </div>
              <div className={styles.form__input}>
                <label className={'visually-hidden'}
                       htmlFor={'cvv'}>Введите защитный код карты</label>
                <Field
                  type={'password'}
                  id={'cvv'}
                  name={'cvv'}
                  placeholder={'CVV'}
                  minLength={3}
                  maxLength={4}
                />
                <ErrorMessage name={'cvv'}
                              component={'p'}
                              className={styles.form__error} />
              </div>
              <span>Сумма : {totalPrice} ₽</span>
              <Button isPaymentButton={true} type={'submit'}>Оплатить</Button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
