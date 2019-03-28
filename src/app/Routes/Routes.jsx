import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import ExchangeRates from 'Pages/ExchangeRates';
import ATMs from 'Pages/ATMs';
import { ROUTES } from './constants';

const routes = [
  [
    ROUTES.home.path, Home,
  ],
  [
    ROUTES.exchangeRates.path, ExchangeRates,
  ],
  [
    ROUTES.atms.path, ATMs,
  ]
];

const Routes = () => {
  return (
    <Switch>
      {routes.map((routeData) => {
        const [
          route,
          Component,
        ] = routeData;

        return (
          <Route
            exact
            key={`route-${route}`}
            path={route}
            render={(props) => {
              return (
                <Component {...props} />
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;
