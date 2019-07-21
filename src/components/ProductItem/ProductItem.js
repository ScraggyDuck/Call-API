import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone 6</td>
                <td>500$</td>
                <td>
                    <span className="badge badge-success">Còn hàng</span>
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