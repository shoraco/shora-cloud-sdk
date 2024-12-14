import axios, { AxiosInstance } from 'axios';
import { AuthConfig } from '../types';

export class ShoraCloudClient {
  private client: AxiosInstance;
  private config: AuthConfig;

  constructor(config: AuthConfig) {
    this.config = config;
    this.client = axios.create({
      baseURL: config.baseURL || 'https://api.shoracloud.com',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  // Products
  async getProducts(params?: any) {
    const response = await this.client.get('/products', { params });
    return response.data;
  }

  async getProduct(id: string) {
    const response = await this.client.get(`/products/${id}`);
    return response.data;
  }

  // Orders
  async createOrder(orderData: any) {
    const response = await this.client.post('/orders', orderData);
    return response.data;
  }

  async getOrder(id: string) {
    const response = await this.client.get(`/orders/${id}`);
    return response.data;
  }

  // Customers
  async getCustomer(id: string) {
    const response = await this.client.get(`/customers/${id}`);
    return response.data;
  }

  async updateCustomer(id: string, data: any) {
    const response = await this.client.put(`/customers/${id}`, data);
    return response.data;
  }
}
