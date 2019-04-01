import { lazy } from 'react';
import withAsyncFallback from 'Shared/withAsyncFallback';

const CropeAsync = lazy(() => import('./CropeContainer'));

export default withAsyncFallback(CropeAsync);