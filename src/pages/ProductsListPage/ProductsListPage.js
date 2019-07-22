import React, { Component } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductItem from '../../components/ProductItem/ProductItem';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { actFetchAllProductsRequest, actDeleteProductRequest } from '../../actions/index';


class ProductsListPage extends Component {

    componentDidMount() {
       this.props.fetchAllProducts();
    }

    onDelete = id => {
        this.props.onDeleteProduct(id);
    }


    render() {
        var { products } = this.props;
        return (
            <div className="col-md-12">
                <Link to="/product/add" className="btn btn-primary mb-5 mt-5">Thêm sản phẩm</Link>
                <ProductsList>
                    {this.showProductItem(products)}
                </ProductsList>
            </div>
        );
    }

    showProductItem = products => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => (
                <ProductItem
                    key={index}
                    index={index}
                    product={product}
                    onDelete={this.onDelete}
                />
            ))
        }
        return result;
    }
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    fetchAllProducts: () => dispatch(actFetchAllProductsRequest()),
    onDeleteProduct: id => dispatch(actDeleteProductRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);