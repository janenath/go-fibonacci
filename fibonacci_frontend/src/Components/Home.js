import React, { Component } from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homeContainer">
                <h2>type a number</h2>
                <input type="text">{this.props.input}</input>
                <div className="goLink" onClick={this.props.handleSubmit}>go!</div>
            </div>
        )
    }
}

export default Home;

