import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

const styles = {
   done: {
      color: 'gray',
      textDecoration: 'line-through'
   }
}

class DoneList extends React.Component {
   render() {
      return (
         <ul style={styles.done}>
            {this.props.items.map(item => {
               return (
                  <Item
                     key={item._id}
                     item={item}
                     removeItem={this.props.removeItem}
                     toggle={this.props.toggle}
                  />
               )
            })}
         </ul>
      )
   }
}

const NewDoneList = connect(state => {
   return {
      items: state.filter(item => item.status === 1)
   }
}, null)(DoneList);

export default NewDoneList;