import {ReactNode} from 'react';

export interface IButton {
  isCardButton?: boolean;
  isLangButton?: boolean;
  isActive?: boolean;
  isRemoveButton?: boolean;
  isQuantityButton?: boolean;
  isIncreaseButton?: boolean;
  isOrderButton?: boolean;
  text?: string;
  onClickCardButton?: () => void;
  onClickRemoveButton?: () => void;
  onClickMinusButton?: () => void;
  onClickPlusButton?: () => void;
  children?: ReactNode;
}
