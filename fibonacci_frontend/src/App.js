import React, { Component } from 'react';
import './App.scss';

import Result from './Components/Result'
import Error from './Components/Error';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      submitted: false,
      error: false
    }
  }

  validInput = new RegExp(/^[1-9][0-9]?$|^100$/);

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
     })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let validInput = this.validInput.test(this.state.value)
    if (!validInput) {
      this.setState({
        value: "",
        error: true
      })
    } else {
      event.preventDefault();
      this.setState({
        submitted: true
      });
    }

  }

  render() {
    if (this.state.error == true) {
      return (
        <Error />
      )
    } else if (this.state.submitted == true) {
      return (
        <Result value={this.state.value}/>
      )
    } else {
      return (
        <div className="homeContainer">
          <h2>type a number</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name='value' value={this.state.value} onChange={this.handleChange} />
            <input type="submit" className="goLink" value="go!" />
          </form>
        </div>
      )
    }
  } 
}

export default App;