export interface CreateProduct {
  name: string;
  price: number;
  description: string;
  category: "Electronics" | "Fashions" | "Sports";
  image: string;
}

export interface Product extends CreateProduct {
  id: string;
}

export interface ProductInitialState {
  products: Product[] | [];
  activeProduct: Product | null;
  filters: ProductFilters;
  loading: boolean;
  error: null | string;
}

export interface ProductFilters {
  search?: string;
  category?: string;
}
