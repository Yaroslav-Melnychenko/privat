import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import DragAndDrop from './DragAndDrop';

export default DragDropContext(HTML5Backend)(DragAndDrop);