import React from 'react';

class TomatoCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prev => {
            return {
                counter: prev.counter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default TomatoCounter;