import { Product } from '@/shared/types/products/Product';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type ProductsState = {
  products: Product[] | null;
};

type ProductsActions = {
  setProducts: (products: Product[]) => void;
};

type ProductStore = ProductsState & ProductsActions;

export const useProductsStore = create<ProductStore>()(
  devtools((set) => ({
    products: null,

    setProducts: (p) => {
      set((state) => ({
        ...state,
        products: p,
      }));
    },
  }))
);
