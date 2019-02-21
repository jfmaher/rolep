import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state={data: props.data, query: '', current: props.data}
  }

  /*
  onchange event handler for the input box.

  Filters data on if one of the values in the dict has the query as a substring.
   */
  onchange = (ev) => {
    ev.preventDefault();
    this.setState({query: ev.target.value});

    const queried = this.state.data.filter((item) => {
      const values_arr = Object.values(item).flat();
      for (let i=0; i<values_arr.length; i++){
        if (values_arr[i].toLowerCase().includes(ev.target.value.toLowerCase())) {
          return true;
        }
      }
      return false;
    });

    this.setState({current: queried});
  };

  render() {
    // The data is formatted as a list of lists of a single person's information
    const list_items = this.state.current.map((item) =>
      <li className='social-info'><ul>{Object.entries(item).map((item) =>
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
