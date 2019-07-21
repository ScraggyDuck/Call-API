import React from 'react';

import Menu from './components/Menu/Menu';
import ProductsList from './components/ProductsList/ProductsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <div class="row">
          <div class="col-md-12">
            <button className="btn btn-primary mb-5 mt-5">Thêm sản phẩm</button>
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
