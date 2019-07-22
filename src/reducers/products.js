import * as Types from '../constants/ActionTypes';

const initialState = [];

const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            var products = action.products;
            return products;
        case Types.ADD_PRODUCTS:
            var newProductsAdd = [...state];
            newProductsAdd.push(action.product);
            return newProductsAdd;
        case Types.UPDATE_PRODUCT:
            var newProductsUpdate = [...state];
            index = findIndex(state, action.id);
            newProductsUpdate[index] = {...action.product}
            return newProductsUpdate;
        case Types.DELETE_PRODUCT:
            var newProductsDelete = [...state];
            index = findIndex(state, action.id);
            newProductsDelete.splice(index, 1);
            return newProductsDelete;
        default:
            return state;
    }
};

const findIndex = (products, id) => {
    var index = -1;
    if (products.length > 0) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default products;