import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <div>
        <li> {this.props.name} </li>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['Foo', 'Bar', 'Fiz']
    }
    this.input = React.createRef();
  }

  add = () => {
    this.setState({
      data: [
        ...this.state.data,
        this.input.current.value
      ]
    })
  }

  render() {
    //let data = ['Bob', 'Alice', 'Tom'];
    return (
      <div>
        {/* <h1>Hello, React!</h1>
        <p>Some content!</p>
        <ul>
          <Item name="foo" />
          <Item name="bar" />
          <Item name="fiz" />
          <Item name="buz" />
        </ul> */}
        {/* <ul>
          {
            data.map(i => {
              return (<Item name={i} />)
            })
          }
        </ul> */}
        <ul>
          {
            this.state.data.map(i => {
              return (<Item name={i} />)
            })
          }
        </ul>
        <input type="text" ref={this.input} /><button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default App;