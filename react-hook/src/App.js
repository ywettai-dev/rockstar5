import React, { useState, useEffect } from 'react';

const List = props => {
  return (
    <li>
      {props.name}
    </li>
  )
};

const api = "http://localhost:8000/tasks";

const App = props => {

  // let state = useState();
  // let items = state[0];
  // let setItem = state[1];

  let [items, setItem] = useState([]);

  let input = React.createRef();

  // browser မှာ component render ပြီးတိုင်း useEffect run
  useEffect(() => {
    fetch(api).then(res => res.json()).then(json => {
      setItem(json);
    })
  }, []);

  let add = () => {
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject: input.current.value })
    }).then(res => res.json()).then(json => {
      setItem([...items, json]);
    });
  }

  let remove = (_id) => {

  }

  return (
    <div>
      <ul>
        {
          items.map(item =>
            <List
              key={item._id}
              name={item.subject}
            />
          )
        }
      </ul>
      <input type="text" ref={input}></input>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default App;