import { lazy } from 'react';
import withAsyncFallback from 'Shared/withAsyncFallback';

const ChartAsync = lazy(() => import('./ChartContainer'));

export default withAsyncFallback(ChartAsync);