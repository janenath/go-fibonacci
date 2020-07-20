import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <h2>type a number</h2>
                <input type="text" value="1"></input>
                <Link to="./Result" className="goLink">go!</Link>
            </div>
        )
    }
}

export default Home;

