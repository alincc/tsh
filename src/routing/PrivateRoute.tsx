import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from 'redux/redux-hooks';
import { getCurrentUser } from 'services/auth/authSlice';
import { AppRoute, AppRouteProps } from './routing.model';

const PrivateRoute: FC<AppRouteProps> = ({ component: Component, ...rest }) => {
  const user = useAppSelector(getCurrentUser);
  return <Route {...rest} render={(props) => (user.token ? <Component {...props} /> : <Redirect to={AppRoute.LOGIN} />)} />;
};

export default PrivateRoute;
