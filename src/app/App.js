import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';

import currencyReducer from './reducers/currencyReducer';
import Header from './Header/Header';

// import styles from './App.scss';

const store = createStore(currencyReducer);

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
