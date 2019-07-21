const initialState = [
    {
        id: 1,
        name: 'Iphone 1',
        price: 500,
        status: true
    },
    {
        id: 2,
        name: 'Iphone 2',
        price: 900,
        status: false
    },
    {
        id: 3,
        name: 'Iphone 3',
        price: 550,
        status: true
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default products;