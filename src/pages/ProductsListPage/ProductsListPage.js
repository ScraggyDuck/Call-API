import React, { Component } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductItem from '../../components/ProductItem/ProductItem';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import callAPI from '../../utils/APICaller';

class ProductsListPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount(){
        callAPI('GET', 'products', null).then(res => {
            this.setState({
                products: res.data
            });
        });
    }

    render() {
        var { products } = this.state;
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

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps, null)(ProductsListPage);