import * as Types from '../constants/ActionTypes';
import callAPI from '../utils/APICaller';

export const actFetchAllProductsRequest = () => {
    return (dispatch) => {
        return callAPI('GET', 'products', null).then(res => {
            dispatch(actFetchAllProducts(res.data))
        });
    }
}
export const actFetchAllProducts = (products) => ({
    type: Types.FETCH_PRODUCTS,
    products
});