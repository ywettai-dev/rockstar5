import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import DoneList from './DoneList';

class App extends React.Component {
  inputItem = React.createRef();

  render() {
    return (
      <div>
        <h1>
          React Todo
          ({
            this.props.count
          })
        </h1>
        <TodoList
          items={this.props.todo}
          removeItem={this.props.delete}
          toggle={this.props.toggle}
        />
        <DoneList
          items={this.props.done}
          removeItem={this.props.delete}
          toggle={this.props.toggle}
        />
        <div>
          <input type="text" ref={this.inputItem}></input>
          <button onClick={() => {
            this.props.add(this.inputItem.current.value);
          }}>
            Add
          </button>
          <button onClick={this.props.clear}>
            Clear
          </button>
        </div>
      </div>
    )
  }
}


/**
 * Higher Order Function
 * Input [function] -> Output [function]
 */

var ReduxApp = connect(state => {
  // state to props
  return {
    todo: state.filter(item => item.status === 0),
    done: state.filter(item => item.status === 1),
    count: state.filter(item => item.status === 0).length,
  }
}, dispatch => {
  // dispatch/method to props 
  return {
    add: subject => dispatch({ type: 'ADD', subject: subject }),
    delete: _id => dispatch({ type: 'DELETE', _id: _id }),
    toggle: _id => dispatch({ type: 'TOGGLE', _id: _id }),
    clear: () => dispatch({ type: 'CLEAR' })
  }
})(App);

export default ReduxApp;