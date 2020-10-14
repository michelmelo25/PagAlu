import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home/index';
import Registrar from './pages/Registrar/index';
import Login from './pages/Login/index';

import HomeAdmin from './pages/HomeAdmin/index';
import RegistrarAdmin from './pages/RegistrarAdmin/index';
import LoginAdmin from './pages/LoginAdmin/index';

axios.defaults.baseURL = 'http://localhost:3333';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Registrar}/>

          <Route path="/admin" exact={true} component={HomeAdmin}/>
          <Route path="/admin/login" component={LoginAdmin}/>
          <Route path="/admin/register" component={RegistrarAdmin}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);