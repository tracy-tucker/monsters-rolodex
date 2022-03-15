import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Tracy",
          id: "01",
        },
        {
          name: "Troy",
          id: "02",
        },
        {
          name: "Preston",
          id: "03",
        },
      ],
    };
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
