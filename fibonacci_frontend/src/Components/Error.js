import React, { Component } from 'react';

class Error extends React.Component {
    render() {
        return (
            <div className="errorContainer">
                <h2>ERROR</h2>
                <p>you must type a number between 1 and 100</p>
                <a href="./">try again</a>
            </div>
        )
    }
}

export default Error;

