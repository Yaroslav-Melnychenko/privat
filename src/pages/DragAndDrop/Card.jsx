import React from 'react';

import styles from './DragAndDrop.scss';

const Card = (props) => {
  window.console.log(props);
  const { name } = props;
  return (
    <div className={styles.listItems}>{name}</div>
  )
}

export default Card;