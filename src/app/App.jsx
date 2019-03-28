import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      </Provider>
    </Router>
  );
};

export default App;
