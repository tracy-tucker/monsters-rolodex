import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    console.log("1 constructor");
  }

  componentDidMount() {
    console.log("3 componentDidMount");
    // XMLHttpRequest using Fetch API
    fetch("https://jsonplaceholder.typicode.com/users")
      // Promise object - if successful, convert using .json()
      .then((response) => response.json())
      // Another Promise object - if successful, use it to setState()
      .then((users) =>
        this.setState(
          () => {
            // returning list of users as items in monsters array
            return { monsters: users };
          },
          () => {
            console.log("4 after running Fetch", this.state);
          }
        )
      );
  }

  render() {
    console.log("2 render");
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
