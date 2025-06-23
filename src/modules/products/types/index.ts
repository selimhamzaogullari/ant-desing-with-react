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
  loading: boolean;
  error: null | string;
}
