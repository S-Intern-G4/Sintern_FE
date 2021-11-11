import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const AuthenticatedRoute = ({ component: Component, ...rest }: RouteProps) => {
  const { token } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (!token) return <Redirect to='/login' />;

        return <Component {...routeProps} />;
      }}
    />
  );
};

export default AuthenticatedRoute;