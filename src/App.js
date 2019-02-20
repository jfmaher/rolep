import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state={data: props.data}
  }

  render() {
    const list_items = this.state.data.map((item) =>
      <li><ul>{Object.entries(item).map((item) =>
        <li>{`${item[0]}: ${item[1]}`}</li>
      )}</ul></li>);

    return (
      <div>
        <input/>
        <ul>
          {list_items}
        </ul>
      </div>
    );
  }
}

export default App;
