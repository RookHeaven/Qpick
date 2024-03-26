import { ReactNode } from 'react';

export interface IButton {
  isCardButton?: boolean;
  isModalCardButton?: boolean;
  isLangButton?: boolean;
  isActive?: boolean;
  isRemoveButton?: boolean;
  isQuantityButton?: boolean;
  isIncreaseButton?: boolean;
  isOrderButton?: boolean;
  isCloseModalButton?: boolean;
  isPaymentButton?: boolean;
  isInfoButton?: boolean;
  text?: string;
  type: 'button' | 'submit' | 'reset';
  onClickCardButton?: () => void;
  onClickRemoveButton?: () => void;
  onClickMinusButton?: () => void;
  onClickPlusButton?: () => void;
  onClickOrderButton?: () => void;
  onClickCloseModalButton?: () => void;
  onClickInfoButton?: () => void;
  children?: ReactNode;
}
