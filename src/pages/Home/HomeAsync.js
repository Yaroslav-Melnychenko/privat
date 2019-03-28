import { lazy } from 'react';
import withAsyncFallback from 'Shared/withAsyncFallback';

const HomeAsync = lazy(() => import('./HomeContainer'));

export default withAsyncFallback(HomeAsync);
