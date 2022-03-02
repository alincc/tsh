import Home from 'app/pages/home/Home';
import { Login } from 'app/pages/login/Login';
import { FC } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { AppRoute } from './routing.model';

export const AppRoutes: FC = () => {
  return (
    <Switch>
      <PrivateRoute path={AppRoute.HOME} exact component={Home} />
      <PublicRoute path={AppRoute.LOGIN} exact component={Login} />

      <Redirect to={AppRoute.LOGIN} />
    </Switch>
  );
};
