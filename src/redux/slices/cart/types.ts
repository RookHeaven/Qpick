import {IProduct} from '../../../@types/types.ts';

export type TCartSlice = {
  products: IProduct[];
  totalPrice: number;
  totalCount: number;
}
