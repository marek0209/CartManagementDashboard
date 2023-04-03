export interface Cart {
  id: number;
  products: CartItemDetails[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  discountedTotal: number;
  userId: number;
}

export interface CartItemDetails {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountedPrice: number;
}

export interface NewCart {
  id: number;
  quantity: number;
}
