import { RouteProps } from 'react-router-dom';

export enum AppRoute {
  HOME = '/',
  LOGIN = '/login',
}

export interface AppRouteProps extends RouteProps {
  component: any;
}
