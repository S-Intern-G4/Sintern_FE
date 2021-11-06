import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/Home';
import Login from './pages/Login/Login';
import Cards from './pages/Cards/Cards';

import { UserContextProvider } from './context/UserContext';
import UnauthenticatedRoute from './shared/routes/UnauthenticatedRoute';
import AuthenticatedRoute from './shared/routes/AuthenticatedRoute';
import Register from "./pages/Register/Register";

const App = () => (
  <UserContextProvider>
    <Router>
      <Switch>
        <AuthenticatedRoute path='/' component={HomePage} exact />
        <UnauthenticatedRoute path='/register' component={Register} exact />
        <UnauthenticatedRoute path='/login' component={Login} exact />
        <UnauthenticatedRoute path='/cards' component={Cards} exact />
        <Redirect to='/' />
      </Switch>
    </Router>
  </UserContextProvider>
);

export default App;