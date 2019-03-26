import { lazy } from 'react';
import withAsyncFallback from 'Shared/withAsyncFallback';

const WeatherAsync = lazy(() => import('./WeatherContainer'));

export default withAsyncFallback(WeatherAsync);
