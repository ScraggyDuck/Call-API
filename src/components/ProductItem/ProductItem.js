import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { product } = this.props;
        var statusName = product.status ? "Còn hàng" : "Hết hàng";
        var statusClass = product.status ? "success" : "danger";
        return (
            <tr>
                <td>{ product.index }</td>
                <td>{ product.index }</td>
                <td>{product.name} </td>
                <td>{ product.price }</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <button className="btn btn-warning mr-2">Sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;