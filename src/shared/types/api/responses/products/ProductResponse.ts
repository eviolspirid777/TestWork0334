import { Product } from '@/shared/types/products/Product';

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
