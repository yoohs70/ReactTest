import React from "react";
//import "./styles.css";
import Table from "./Table";

class App extends React.Component {
  render() {
    // Props
    const characters = [
      {
        name: "Hyosang",
        job: "Application Developer"
      },
      {
        name: "Nahyun",
        job: "Web Developer"
      }
    ];

    return (
      <div className="Container">
        <h1>Hello React!</h1>
        {/* pass data to the child component (table) */}
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
