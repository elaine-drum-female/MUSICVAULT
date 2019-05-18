import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Wrapper from './hoc/wrapper';
import Authorize from './hoc/auth';

import Home from './components/Home';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/register';
import Shop from './components/Shop';

import UserDashboard from './components/PrivateDashboard';


const App = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/user/dashboard" component={Authorize(UserDashboard, true)} />

        <Route exact path="/register" component={Authorize(Register, false)} />
        <Route exact path="/register_login" component={Authorize(RegisterLogin, false)} />

        <Route exact path="/" component={Authorize(Home , null)} />
        <Route exact path="/shop" component={Authorize(Shop , null)} />
      </Switch>
    </Wrapper>
  );
};

export default App;