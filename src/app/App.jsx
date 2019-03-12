import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Routes from './Routes';

import reducers from './store/reducers';
import Header from './Header';

// import styles from './App.scss';

const store = createStore(reducers, applyMiddleware(thunk));

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
