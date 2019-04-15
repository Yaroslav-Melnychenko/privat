import React from 'react';
import { DropTarget } from 'react-dnd';
import styles from './DragAndDrop.scss';

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  }

}

const Target = (props) => {
  const { connectDropTarget, hovered } = props;
  const backgroundColor = hovered ? 'lightgreen' : 'white';
  return connectDropTarget(
    <div className={styles.targetContainer} style={{ backgroundColor }}>Drop here ...</div>
  ) 
}
export default DropTarget('item', {}, collect)(Target);