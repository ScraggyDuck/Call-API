import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import callAPI from '../../utils/APICaller';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            productName: '',
            productPrice: '',
            productStatus: ''
        }
    }

    componentDidMount(){
        var { match } = this.props;
        if(match) {
            var id = match.params.id;
            callAPI('GET', `products/${id}`, null).then(res => {
                var product = res.data;
                this.setState({
                    id: product.id,
                    productName: product.name,
                    productPrice: product.price,
                    productStatus: product.status
                })
            });
        }
    }

    onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = e => {
        e.preventDefault();
        var { id, productName, productPrice, productStatus } = this.state;
        var { history } = this.props;
        if(id !== ''){
            callAPI('PUT', `products/${id}`, {
                name: productName,
                price: productPrice,
                status: productStatus
            }).then(res => {
                history.push('/products-list');
            });
        }
        else{
            callAPI('POST', 'products', {
                name: productName,
                price: productPrice,
                status: productStatus
            }).then(res => {
                history.push('/products-list');
            });
        }
    }

    render() {
        var { productName, productPrice, productStatus } = this.state;
        return (
            <div className="col-md-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor="productName">Tên sản phẩm: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="productName"
                            id="productName"
                            value={productName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Giá: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="productPrice"
                            id="productPrice"
                            value={productPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tình trạng: </label>
                        <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="productStatus"
                                value={productStatus}
                                onChange={this.onChange}
                                checked={productStatus}
                            />
                            <label className="form-check-label">Còn hàng</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mr-3">Lưu lại</button>
                    <Link to="/products-list" className="btn btn-warning">Hủy bỏ</Link>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;