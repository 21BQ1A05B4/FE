import React, { Component } from 'react'

export default class DigitalClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }
    componentDidMount() {
        this.tick();
    }
    tick = () => {
        const hrs = new Date().getHours();
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();
        const updatedTime = `${hrs} : ${min} : ${sec}`;
        this.setState({time:updatedTime});
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.time !== prevState) {
            this.interval = setInterval(() => {
                this.tick();
            }, 1000)
        }
    }
    componentWillUnmount() {
        clearInterval();
    }
    render() {
        return (
        <div>
            <h1>Digital Clock using Class Component</h1>
            <h1>{this.state.time}</h1>
        </div>
        )
    }
}
