import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductsList extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-header bg-primary text-white">
                    Thông tin sản phẩm
            </div>
                <div class="card-body">
                    <table className=" text-center table table-hover table-bordered">
                        <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                           <ProductItem />
                           <ProductItem />
                           <ProductItem />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductsList;