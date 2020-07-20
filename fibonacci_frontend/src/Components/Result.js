import React, { Component } from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fibonacci: []
        }
      }

    componentDidMount() {
        this.getFibonacci()
    }

    getFibonacci = () => {
        fetch(`/api/fibonacci/${this.props.value}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            }
        })
            .then(response => {return response.json()})
            .then(jsonedResponse => {
                console.log(jsonedResponse)
                this.setState({
                    fibonacci: jsonedResponse
                })
            })
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div className="resultContainer">
                <h3>fibonacci sequence:</h3>
                    <div className="fibonacciResult">{this.state.fibonacci.map ( number => {
                        return (<p key={this.state.key}>{number}</p>)
                        }
                    )}
                    </div>
                <div className="startOverLink"><a href="./">start over</a></div>
            </div>
        )
    }
}

export default Result;

