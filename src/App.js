import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state={data: props.data, query: ''}
  }

  /*
  onchange event handler for the input box.
   */
  onchange = (ev) => {
    ev.preventDefault();
    this.setState({query: ev.target.value})
  };

  render() {
    const list_items = this.state.data.map((item) =>
      <li><ul>{Object.entries(item).map((item) =>
        <li>{`${item[0]}: ${item[1]}`}</li>
      )}</ul></li>);

    return (
      <div>
        <input onChange={this.onchange}/>
        <ul>
          {list_items}
        </ul>
      </div>
    );
  }
}

export default App;
