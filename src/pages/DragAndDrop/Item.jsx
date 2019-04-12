import React from 'react';
import { DragSource } from 'react-dnd';
import styles from './DragAndDrop.scss';

const itemSource = {
  beginDrag(props) {
    return props.item
  },
  endDrag(props) {
    return props.handleDrop(props.item.id)
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const Item = (props) => {
  const { item, connectDragSource, isDragging } = props;
  const styleOnDrag = isDragging ? { backgroundColor: '#333' } : null;

  return connectDragSource(
    <div className={styles.item} style={styleOnDrag}>{item.name}</div>
  )
}
export default DragSource('item', itemSource, collect)(Item)