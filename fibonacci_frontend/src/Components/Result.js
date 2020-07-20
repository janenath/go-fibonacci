import React, { Component } from 'react';

class Result extends React.Component {
    render() {
        return (
            <div className="resultContainer">
                <h3>fibonacci sequence:</h3>
                <div className="outputContainer">
                    <p className="fibonacciResult"></p>
                </div>
                <div className="startOverLink"><a href="./">start over</a></div>
            </div>
        )
    }
}

export default Result;

