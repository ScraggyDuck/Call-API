import React, { Component } from 'react';

import Menu from './components/Menu/Menu';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <div className="container">
            <div className="row">
              {this.showRoutes(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }

  showRoutes = routes => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => (
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ));
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
