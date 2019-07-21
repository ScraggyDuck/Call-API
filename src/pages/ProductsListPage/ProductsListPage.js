import React, { Component } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductItem from '../../components/ProductItem/ProductItem';

class ProductsListPage extends Component {
    render() {
        // var { products } = this.props;
        var products = [];
        return (
            <div className="col-md-12">
                <button className="btn btn-primary mb-5 mt-5">Thêm sản phẩm</button>
                <ProductsList>
                    {this.showProductItem(products)}
                </ProductsList>
            </div>
        );
    }

    showProductItem = products => {
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => (
                <ProductItem 
                    key={index}
                    index={index}
                    product={product}
                />
            ))
        }
        return result;
    }
}

export default ProductsListPage;