import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import News from 'Pages/News';
import { Provider } from 'react-redux';
import { store } from 'Store/configureStore';
import Routes from './Routes';
import Header from './Header';

require('dotenv').config();

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes />
        <Switch>
          <Route path="/news/:id" component={News} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
