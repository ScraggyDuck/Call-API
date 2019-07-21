import React, { Component } from 'react';

class ProductActionPage extends Component {
    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="productName">Tên sản phẩm: </label>
                        <input type="text" className="form-control" name="" id="productName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Giá: </label>
                        <input type="number" className="form-control" name="" id="productPrice" />
                    </div>
                    <div className="form-group">
                        <label>Tình trạng: </label>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">Còn hàng</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                    {/* <button type="submit" className="btn btn-warning">Hủy bỏ</button> */}
                </form>
            </div>
        );
    }
}

export default ProductActionPage;