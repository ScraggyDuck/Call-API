import * as Types from '../constants/ActionTypes';

export const actFetchAllProducts = (products) => ({
    type: Types.FETCH_PRODUCTS,
    products
});