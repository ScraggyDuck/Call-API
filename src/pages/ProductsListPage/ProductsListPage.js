import React, { Component } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductItem from '../../components/ProductItem/ProductItem';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { actFetchAllProductsRequest } from '../../actions/index';

import callAPI from '../../utils/APICaller';

class ProductsListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
       this.props.fetchAllProducts();
    }

    onDelete = id => {
        var { products } = this.state;
        callAPI('DELETE', `products/${id}`, null).then(res => {
            if (res.status === 200) {
                var index = this.findIndex(id);
                products.splice(index, 1);
                this.setState({
                    products
                });
            }
        });
    }

    findIndex = id => {
        var { products } = this.state;
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
    fetchAllProducts: () => dispatch(actFetchAllProductsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);