export type StackScreens = {
    ProductListScreen: undefined,
    AddProductListScreen: undefined
}
export interface ProductItem {
    id: number;
    name: string;
    price: number;
    type: number;
  }
  
  export type ProductsContextState = {
    products: ProductItem[];
    addProduct: (product: ProductItem) => void;
    updateProduct: (product: ProductItem) => void;
  };