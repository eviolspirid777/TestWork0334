import { LoginResponse } from '@/shared/types/api/responses/login/LoginResponse';
import { FormSubmitDataType } from '@/shared/types/login/Form';
import axios, { AxiosInstance } from 'axios';
import { localStorageService } from '../shared/services/localStorage/localStorage';
import { GetProductsRequestType } from '../shared/types/api/requests/products/GetProductsRequest';
import { ProductsResponse } from '../shared/types/api/responses/products/ProductResponse';

class ApiClient {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://dummyjson.com',
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.apiClient.interceptors.request.use(
      (config) => {
        const accessToken = localStorageService.getAccessToken();
        if (accessToken && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  async login(data: FormSubmitDataType) {
    const response = await this.apiClient.post<LoginResponse>(
      '/auth/login',
      data
    );
    localStorageService.setRefreshToken(response.data.refreshToken);
    localStorageService.setAccessToken(response.data.accessToken);
    return response.data;
  }

  async validateUser() {
    const accessToken = localStorageService.getAccessToken();
    if (accessToken) {
      const response = await this.apiClient.get<LoginResponse>('auth/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    }
    throw new Error('Invalid accessToken!');
  }

  async getProducts(data: GetProductsRequestType) {
    const response = await this.apiClient.get<ProductsResponse>('products', {
      params: data,
    });
    return response.data;
  }
}

export const apiClient = new ApiClient();
