const MyContext = React.createContext("Babel in-browser!");

const App = props => (
   //<MyContext.Provider value="React.createContext()">
   <div>
      <Header />
      <ul>
         <li>babel-core</li>
         <li>babel-cli</li>
         <li>preset-react</li>
      </ul>
   </div>
   //</MyContext.Provider>
);

const Header = props => (
   <div><Title /></div>
)

const Title = props => {
   //<MyContext.Consumer>
   //{value => <h1>{value}</h1>}
   //</MyContext.Consumer>
   const value = React.useContext(MyContext);
   return <h1>{value}</h1>
}

ReactDOM.render(<App />, document.getElementById('app'));