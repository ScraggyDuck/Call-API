import * as Types from '../constants/ActionTypes';

const initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            var products = action.products;
            return products;
        default:
            return state;
    }
};

export default products;