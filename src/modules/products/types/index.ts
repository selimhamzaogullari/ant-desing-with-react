export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "Electronics" | "Fashions" | "Sports";
  image: string;
}

export interface ProductInitialState {
  products: Product[] | [];
  filters: ProductFilters;
  loading: boolean;
  error: null | string;
}

export interface ProductFilters {
  search?: string;
  category?: string;
}
