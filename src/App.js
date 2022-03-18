import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("1 constructor");
//   }

// componentDidMount() {
//   console.log("3 componentDidMount");
//   // XMLHttpRequest using Fetch API
//   fetch("https://jsonplaceholder.typicode.com/users")
//     // Promise object - if successful, convert using .json()
//     .then((response) => response.json())
//     // Another Promise object - if successful, use it to setState()
//     .then((users) =>
//       this.setState(
//         () => {
//           // returning list of users as items in monsters array
//           return { monsters: users };
//         },
//         () => {
//           console.log("4 after running Fetch", this.state);
//         }
//       )
//     );
// }

// onSearchChange = (event) => {
//   console.log(event.target.value);
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   });
//   console.log("i am state", this.state);
// };

// render() {
//   console.log("2 render");
//   const { monsters, searchField } = this.state;
//   const { onSearchChange } = this;

//   const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLocaleLowerCase().includes(searchField);
//   });

//   return (
//     <div className="App">
//       <h1 className="app-title">Monsters Rolodex</h1>
//       <SearchBox
//         onChangeHandler={onSearchChange}
//         placeholder="search monsters"
//         className="search-box"
//       />
//       <CardList monsters={filteredMonsters} />
{
  /* {filteredMonsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>;
        })} */
}
// </div>
//     );
//   }
// }

export default App;
