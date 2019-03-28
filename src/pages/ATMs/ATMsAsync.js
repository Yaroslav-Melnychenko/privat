import { lazy } from 'react';
import withAsyncFallback from 'Shared/withAsyncFallback';

const ATMsAsync = lazy(() => import('./ATMsContainer'));

export default withAsyncFallback(ATMsAsync);
