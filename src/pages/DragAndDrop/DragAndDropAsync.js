import { lazy } from 'react';
import withAsyncFallback from 'Shared/withAsyncFallback';

const DragAndDropAsync = lazy(() => import('./DragAndDropContainer'));

export default withAsyncFallback(DragAndDropAsync);