import React from 'react';
import TodoList from './TodoList';
import DoneList from './DoneList';

class App extends React.Component {
  state = {
    // items: [
    //   { _id: '1', subject: 'Milk', status: 0 },
    //   { _id: '2', subject: 'Butter', status: 1 },
    //   { _id: '3', subject: 'Egg', status: 0 },
    //   { _id: '4', subject: 'Flour', status: 0 },
    //   { _id: '5', subject: 'Salt', status: 1 },
    //   { _id: '6', subject: 'Sugar', status: 0 },
    // ]
    items: []
  }

  inputItem = React.createRef();

  //autoId = this.state.items.length;

  api = "http://localhost:8000/tasks";

  componentDidMount() {
    fetch(this.api).then(res => res.json()).then(items => {
      this.setState({ items });
    });
  }

  addItem = () => {
    // this.setState({
    //   items: [
    //     ...this.state.items,
    //     {
    //       _id: `${++this.autoId}`,
    //       subject: this.inputItem.current.value,
    //       status: 0
    //     }
    //   ]
    // })
    fetch(this.api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject: this.inputItem.current.value })
    }).then(res => res.json().then(item => {
      this.setState({
        items: [...this.state.items, item]
      });
    }));
  }

  removeItem = (_id) => {
    fetch(`${this.api}/${_id}`, { method: 'DELETE' });
    this.setState({
      items: this.state.items.filter(item => item._id !== _id)
    })
  }

  toggle = (_id) => {
    this.setState({
      items: this.state.items.map(item => {
        //if (item._id === _id) item.status = +!item.status;
        if (item._id === _id) {
          item.status = +!item.status;

          fetch(`${this.api}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: item.status })
          })
        }
        return item;
      })
    })
  }

  render() {
    return (
      <div>
        <h1>
          React Todo
          ({
            this.state.items.filter(item => {
              return item.status === 0
            }).length
          })
        </h1>
        <TodoList
          items={this.state.items.filter(i => i.status === 0)}
          removeItem={this.removeItem}
          toggle={this.toggle}
        />
        <DoneList
          items={this.state.items.filter(i => i.status === 1)}
          removeItem={this.removeItem}
          toggle={this.toggle}
        />
        <div>
          <input type="text" ref={this.inputItem}></input>
          <button onClick={this.addItem}>Add</button>
        </div>
      </div>
    )
  }
}

export default App;