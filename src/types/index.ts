export interface AuthConfig {
  apiKey: string;
  baseURL?: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  metadata?: Record<string, any>;
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';
