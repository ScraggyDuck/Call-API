import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="navbar-brand" >Call API</div>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#home">Trang chủ<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Danh sách sản phẩm</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <button className="btn btn-primary mb-5 mt-5">Thêm sản phẩm</button>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
