export interface IProduct {
  id: number;
  img: string;
  title: string;
  priceOld?: number;
  price: number;
  rate: number;
  category: string;
  count?: number;
}
