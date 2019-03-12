import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import currencyReducer from './app/reducers/currencyReducer';
import './index.scss';

const store = createStore(currencyReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
