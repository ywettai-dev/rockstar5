import React from 'react';

class Item extends React.Component {
   render() {
      return (
         <div>
            <li>
               {this.props.item.name}
               <a href="#/" onClick={() => {
                  this.props.removePeople(this.props.item._id)
               }}>
                  &times;
          </a>
            </li>
         </div>
      )
   }
}

export default Item;