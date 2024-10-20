import { api, RequestOptions } from '../api-client';
import { ProductParams } from './type_interface';

export const WooCommerce = {
    store: {
        get: <T>(endpoint: string, params?: RequestOptions['params']): Promise<T | undefined> => {
            return api.get(endpoint, params ? { params } : undefined);
        },
        getProducts: <T>(params?: Partial<ProductParams>): Promise<T | undefined> => {
            const productParams = params as RequestOptions['params']
            return api.get('/wc/store/v1/products', params ? { params: productParams } : undefined);
        }
    }
}