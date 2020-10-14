import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Registrar from './pages/Registrar/index';
import Login from './pages/Login/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/" component={Login}/>
          <Route path="/" component={Registrar}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);