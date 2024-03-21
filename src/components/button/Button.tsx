/// <reference types="vite-plugin-svgr/client" />

import {FC, JSX} from 'react';

import Trash from '../../assets/icons/trash.svg?react';

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
    onClickCardButton,
    onClickRemoveButton,
    onClickMinusButton,
    onClickPlusButton,
    text,
    children
  } = props;
  const renderButton = (): JSX.Element | undefined => {
    if (isCardButton) {
      return <button
        onClick={onClickCardButton}
        className={classNames(styles.button, styles.button__card)}>
        {children}
      </button>
    }

    if (isLangButton) {
      return <button
        className={classNames(styles.button, styles.button__lang, isActive && styles.active)}>
        {children}
      </button>
    }

    if (isRemoveButton) {
      return <button
        onClick={onClickRemoveButton}
        className={classNames(styles.button, styles.button__cart)}
        title={text}
        aria-label={text}>
        <Trash className={styles.button__iconTrash}/>
      </button>
    }

    if (isQuantityButton) {
      return <button
        onClick={isIncreaseButton ? onClickPlusButton : onClickMinusButton}
        className={classNames(styles.button, styles.button__quantity, isIncreaseButton && styles.cartIncrease)}
        title={text}
        aria-label={text}>
      </button>
    }

    if (isOrderButton) {
      return <button
        className={classNames(styles.button, styles.button__order)}>
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
