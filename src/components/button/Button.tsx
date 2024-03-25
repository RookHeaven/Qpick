/// <reference types="vite-plugin-svgr/client" />

import {FC, JSX} from 'react';

import Trash from '../../assets/icons/trash.svg?react';
import Close from '../../assets/icons/close.svg?react';

import {IButton} from './types.ts';

import classNames from 'classnames';

import styles from './button.module.scss';

export const Button: FC<IButton> = (props) => {
  const {
    isCardButton,
    isLangButton,
    isActive,
    isRemoveButton,
    isQuantityButton,
    isIncreaseButton,
    isOrderButton,
    isCloseModalButton,
    isPaymentButton,
    onClickCardButton,
    onClickRemoveButton,
    onClickMinusButton,
    onClickPlusButton,
    onClickOrderButton,
    onClickCloseModalButton,
    text,
    type,
    children
  } = props;
  const renderButton = (): JSX.Element | undefined => {
    if (isCardButton) {
      return <button
        type={type}
        onClick={onClickCardButton}
        className={classNames(styles.button, styles.button__card)}>
        {children}
      </button>
    }

    if (isLangButton) {
      return <button
        type={type}
        className={classNames(styles.button, styles.button__lang, isActive && styles.active)}>
        {children}
      </button>
    }

    if (isRemoveButton) {
      return <button
        type={type}
        onClick={onClickRemoveButton}
        className={classNames(styles.button, styles.button__cart)}
        title={text}
        aria-label={text}>
        <Trash className={styles.button__iconTrash}/>
      </button>
    }

    if (isQuantityButton) {
      return <button
        type={type}
        onClick={isIncreaseButton ? onClickPlusButton : onClickMinusButton}
        className={classNames(styles.button, styles.button__quantity, isIncreaseButton && styles.cartIncrease)}
        title={text}
        aria-label={text}>
      </button>
    }

    if (isOrderButton) {
      return <button
        type={type}
        onClick={onClickOrderButton}
        className={classNames(styles.button, styles.button__order)}>
        {children}
      </button>
    }

    if (isCloseModalButton) {
      return <button
        type={type}
        onClick={onClickCloseModalButton}
        className={classNames(styles.button, styles.button__closeModal)}
        title={text}
        aria-label={text}>
        <Close className={styles.button__iconClose}/>
      </button>
    }

    if (isPaymentButton) {
      return <button
        type={type}
        className={classNames(styles.button, styles.button__submit)}>
        {children}
      </button>
    }
  }

  const items: JSX.Element | undefined = renderButton();

  return (
    <>
      {items}
    </>
  );
};
