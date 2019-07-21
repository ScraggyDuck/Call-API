import React, { Component } from 'react';

class ProductItem extends Component {
    onDelete = id => {
        if(window.confirm('Bạn có chắc chắn muốn xóa không?')){
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? "Còn hàng" : "Hết hàng";
        var statusClass = product.status ? "success" : "danger";
        return (
            <tr>
                <td>{ index + 1}</td>
                <td>HH{ product.id}</td>
                <td>{product.name} </td>
                <td>{ product.price }</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <button className="btn btn-warning mr-2">Sửa</button>
                    <button className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;