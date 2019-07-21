import React, { Component } from 'react';

class ProductsList extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header bg-primary text-white">
                    Thông tin sản phẩm
            </div>
                <div className="card-body">
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
                           {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductsList;