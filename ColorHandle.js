import React, { Component } from 'react'

export default class ColorHandle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#ff00ff'
        }
    }
    red = () => {
        this.setState({color:'#ff0000'});
    }
    green = () => {
        this.setState({color:'#00ff00'});
    }
    blue = () => {
        this.setState({color:'#0000ff'});
    }
    render() {
        return (
        <div>
            <h1 style={{color:this.state.color}}>this is something in FED</h1>
            <button type='button' onClick={this.red}>red</button>
            <button type='button' onClick={this.green}>green</button>
            <button type='button' onClick={this.blue}>blue</button>
        </div>
        )
    }
}
