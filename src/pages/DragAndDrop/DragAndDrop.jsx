import React, { Component } from 'react';
import Item from './Item';
import Target from './Target';
import Card from './Card';
import styles from './DragAndDrop.scss';

class DragAndDrop extends Component {

  state = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ],
    cards: [
      { id: 1, name: 'Card 1' },
      { id: 2, name: 'Card 2' },
      { id: 3, name: 'Card 3' },
      { id: 4, name: 'Card 4' },
    ] 
  }

  deleteItem = (id) => {
    const { items } = this.state;
    items.filter((item, index) => {
      if(item.id === id) {
        items.splice(index, 1);
      }
    });
    this.setState({ items });
  }

  moveCart = () => {

  }

  render() {
    const { items, cards } = this.state;
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.itemsContainer}>
            {
              items.map(item => <Item key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />)
            }
          </div>
          <div className={styles.target}>
            <Target />
          </div>
        </div>
        <div className={styles.listContainer}>
          {
            cards.map((cart, index) => <Card key={cart.id} index={index} id={cart.id} name={cart.name} moveCart={this.moveCart} />)
          }
        </div>
      </React.Fragment>
    )
  }
}

export default DragAndDrop;