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

export const actDeleteProductRequest = id => {
    return dispatch => {
        return callAPI('DELETE', `products/${id}`, null).then(res => {
            if(res.status === 200){
                dispatch(actDeleteProduct(id))
            }
        });
    }   
};

export const actDeleteProduct = id => ({
    type: Types.DELETE_PRODUCT,
    id
});