import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    // API request
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      console.log(response.json())
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
