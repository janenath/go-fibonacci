import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Error extends React.Component {
    render() {
        return (
            <div className="errorContainer">
                <h2>ERROR</h2>
                <p>error text</p>
                <Link to="./">try again</Link>
            </div>
        )
    }
}

export default Error;

