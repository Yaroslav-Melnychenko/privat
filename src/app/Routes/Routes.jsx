import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import ExchangeRates from 'Pages/ExchangeRates';
import ATMs from 'Pages/ATMs';
import Weather from 'Pages/Weather';
import Crope from 'Pages/Crope';
import Chart from 'Pages/Chart';
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
  ],
  [
    ROUTES.weather.path, Weather
  ],
  [
    ROUTES.crope.path, Crope
  ],
  [
    ROUTES.chart.path, Chart
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
