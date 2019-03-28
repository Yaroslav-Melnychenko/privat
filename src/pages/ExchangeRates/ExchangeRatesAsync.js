import { lazy } from 'react';
import withAsyncFallback from 'Shared/withAsyncFallback';

const ExchangeRatesAsync = lazy(() => import('./ExchangeRatesContainer'));

export default withAsyncFallback(ExchangeRatesAsync);
