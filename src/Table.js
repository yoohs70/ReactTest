import React, { Component } from "react";

class Table extends Component {
  render() {
    //receive Data
    const { characterData } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

// Function component
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name2</th>
        <th>Job2</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return <tbody />;
};

export default Table;
