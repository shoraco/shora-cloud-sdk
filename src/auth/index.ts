import axios from 'axios';
import { AuthConfig } from '../types';

export class Auth {
  private config: AuthConfig;

  constructor(config: AuthConfig) {
    this.config = config;
  }

  async login(email: string, password: string) {
    const response = await axios.post(`${this.config.baseURL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  }

  async logout() {
    const response = await axios.post(`${this.config.baseURL}/auth/logout`, {}, {
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
      },
    });
    return response.data;
  }

  async getCurrentUser() {
    const response = await axios.get(`${this.config.baseURL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
      },
    });
    return response.data;
  }
}
