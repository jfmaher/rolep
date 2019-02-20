import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state={data: props.data}
  }

  render() {
    return (
      <div>
        <input/>
        <ul>
          <li>hello</li>
        </ul>
      </div>
    );
  }
}

export default App;
