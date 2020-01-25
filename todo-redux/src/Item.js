import React from 'react';
import { connect } from 'react-redux';

class Item extends React.Component {
   render() {
      return (
         <li>
            <input
               type="checkbox"
               checked={this.props.item.status}
               onChange={() => {
                  this.props.toggle(this.props.item._id)
               }}
            >
            </input>
            {this.props.item.subject}
            <a href="#/" onClick={() => {
               this.props.delete(this.props.item._id)
            }}>&times;</a>
         </li>
      )
   }
}

const NewItem = connect(null, dispatch => {
   return {
      delete: _id => dispatch({ type: 'DELETE', _id: _id }),
      toggle: _id => dispatch({ type: 'TOGGLE', _id: _id })
   }
})(Item);

export default NewItem;