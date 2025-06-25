import { mockProducts } from "../../../api/mockData";
import type { Product, ProductFilters } from "../types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class ProductService {
  private products: Product[] = [...mockProducts]; // değiştirilebilir internal state

  async getProducts(filters?: ProductFilters) {
    await delay(500);

    let filtered = [...this.products];

    if (filters?.search) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(filters.search.toLowerCase()));
    }

    if (filters?.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    return {
      data: filtered,
      message: "Ok",
      statusCode: 200,
    };
  }
  async getProductById(id: string) {
    await delay(250);
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new Error("Product not found");

    return {
      data: product,
      message: "Ok",
      statusCode: 200,
    };
  }

  async removeProduct(id: string) {
    await delay(200);
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Product not found");
    this.products.splice(index, 1);

    return {
      data: undefined,
      message: "Ok",
      statusCode: 200,
    };
  }
}

export const productApi = new ProductService();
