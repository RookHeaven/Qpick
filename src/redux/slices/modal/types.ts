import { IProduct } from '../../../@types/types.ts';

export type TModalSlice = {
  modalIsOpen: boolean;
  modalProduct: IProduct | null
}
