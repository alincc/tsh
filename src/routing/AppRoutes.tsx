import Home from 'app/pages/home/Home';
import { Login } from 'app/pages/login/Login';
import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes: FC = () => {
  return (
    <Switch>
      <Route path={AppRoute.HOME} exact component={Home} />
      <Route path={AppRoute.LOGIN} component={Login} />

      <Redirect to={AppRoute.HOME} />
    </Switch>
  );
};
