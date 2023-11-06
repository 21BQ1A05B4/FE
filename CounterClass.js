import React, { Component } from 'react';
export default class CounterClass extends Component {
    state = {
        count : 0
    };

    upHandle = () => {
        this.setState({count: this.state.count+1});
    }
    downHandle = () => {
        this.setState({count: this.state.count-1});
    }

    render() {
        return (
            <>
                <button type='button' onClick={this.downHandle}><h1>decre</h1></button>
                &nbsp;
                &nbsp; 
                <h4>{this.state.count}</h4>
                &nbsp;
                &nbsp;
                <button type='button' onClick={this.upHandle}><h1>Incre</h1></button>
            </>
        )
    }
}