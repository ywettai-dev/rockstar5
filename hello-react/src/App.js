/** 
 * Component Parent to Child only သာသွား pass ပေးတဲ့ထဲမှာ event/ state/ props တွေပါနိုင်
 * props တွေက Read only သာဖြစ်
 **/
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { '_id': 1, 'name': 'Alice' },
        { '_id': 2, 'name': 'Joce' },
      ]
    }
    this.autoid = this.state.data.length;

    this.inputPeople = React.createRef();
    this.addPeople = this.addPeople.bind(this);

    this.removePeople = this.removePeople.bind(this);
  }

  addPeople() {
    let data = this.state.data;
    let name = this.inputPeople.current.value;
    data.push({ '_id': ++this.autoid, 'name': name });
    this.setState({
      data: data
    })
    /*this.setState({
      data: [
        ...this.state.data,
        this.inputPeople.current.value
      ]
    })*/
  }

  removePeople(_id) {
    let data = this.state.data.filter(item => item._id !== _id);
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.data.map(item => {
              return (
                <Item
                  item={item}
                  key={item._id}
                  removePeople={this.removePeople} />
              )
            })
          }
        </ul>
        <input type="text" ref={this.inputPeople}></input><button onClick={this.addPeople}>Add</button>
      </div>
    )
  }
}

export default App;