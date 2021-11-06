import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cards from './pages/Cards/Cards';
import { UserContextProvider } from './context/UserContext';
import UnauthenticatedRoute from './shared/routes/UnauthenticatedRoute';
import AuthenticatedRoute from './shared/routes/AuthenticatedRoute';
import Register from './pages/Register/Register';
import Feed from './pages/Feed/Feed';


const App = () => (
  <UserContextProvider>
    <Router>
      <Switch>
        <AuthenticatedRoute path='/' component={Cards} exact />
        <UnauthenticatedRoute path='/register' component={Register} exact />
        <UnauthenticatedRoute path='/login' component={Login} exact />
        <UnauthenticatedRoute path='/feed/:domainType' component={Feed} exact />
        <Redirect to='/' />
      </Switch>
    </Router>
  </UserContextProvider>
);

export default App;