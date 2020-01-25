import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class TodoList extends React.Component {
   render() {
      return (
         <ul>
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

const NewTodoList = connect(state => {
   return {
      items: state.filter(item => item.status === 0)
   }
}, null)(TodoList);

export default NewTodoList;