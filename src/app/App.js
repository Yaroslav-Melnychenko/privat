import React, { Suspense  } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.scss';
import Header from './components/Header/Header';
import ExchangeRates from './components/ExchangeRates/ExchangeRates';

const ATMs = React.lazy(() => import('./components/ATMs/ATMs'));
const AtmsPage = () => <ATMs />;
const ExchangeRatesPage = () => <ExchangeRates />;

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className={styles.page}>
          <Route exact path="/" component={ExchangeRatesPage} />
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/atms" component={AtmsPage} />
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
