import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login/Login';
import Cards from './pages/Cards/Cards';
import { UserContextProvider } from './context/UserContext';
import UnauthenticatedRoute from './shared/routes/UnauthenticatedRoute';
import AuthenticatedRoute from './shared/routes/AuthenticatedRoute';
import Register from './pages/Register/Register';
import Feed from './pages/Feed/Feed';
import Profile from './pages/Profile/Profile';
import Quizz from './pages/Quizz/Quizz';
import OpenPositionFeed from './pages/Appliers/OpenPositionFeed';
import Positions from './pages/Positions/Positions';
import Results from './pages/Results/Results';
import PositionForm from './pages/Positions/PositionForm';

const App = () => (
  <UserContextProvider>
    <Router>
      <Switch>
        <UnauthenticatedRoute path='/register' component={Register} exact />
        <UnauthenticatedRoute path='/login' component={Login} exact />
        <AuthenticatedRoute path='/' component={Cards} exact />
        <AuthenticatedRoute path='/feed/:domain' component={Feed} exact />
        <AuthenticatedRoute path='/profile' component={Profile} exact />
        <AuthenticatedRoute path='/quizz/:openInternPositionId' component={Quizz} exact />
        <AuthenticatedRoute path='/appliers/:openPositionId' component={OpenPositionFeed} exact />
        <AuthenticatedRoute path='/positions' component={Positions} exact />
        <AuthenticatedRoute path='/positions/add' component={PositionForm} exact />
        <AuthenticatedRoute path='/:openPositionId/results' component={Results} exact />
        <Redirect to='/' />
      </Switch>
    </Router>
  </UserContextProvider>
);

export default App;