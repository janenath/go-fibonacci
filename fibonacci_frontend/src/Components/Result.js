import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Result extends React.Component {
    render() {
        return (
            <div className="resultContainer">
                <h3>fibonacci sequence:</h3>
                <div className="outputContainer">
                    <p className="fibonacciResult"></p>
                </div>
                <div className="startOverLink"><Link to="./">start over</Link></div>
            </div>
        )
    }
}

export default Result;

