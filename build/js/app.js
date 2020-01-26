const MyContext = React.createContext("Babel in-browser!");

const App = props => //<MyContext.Provider value="React.createContext()">
React.createElement("div", null, React.createElement(Header, null), React.createElement("ul", null, React.createElement("li", null, "babel-core"), React.createElement("li", null, "babel-cli"), React.createElement("li", null, "preset-react"))) //</MyContext.Provider>
;

const Header = props => React.createElement("div", null, React.createElement(Title, null));

const Title = props => {
  //<MyContext.Consumer>
  //{value => <h1>{value}</h1>}
  //</MyContext.Consumer>
  const value = React.useContext(MyContext);
  return React.createElement("h1", null, value);
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));