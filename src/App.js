import React, {Component} from 'react';
import './App.css';
import Checkbox from './Components/Checkbox'
import Greeting from './Components/Greeting'
import Motivation from './Components/Motivation'
import TomatoCounter from './Components/TomatoCounter'

class App extends Component {
    render() {
        return (
            <div>
                <Greeting className="Greeting"/>
                <div className="todo-list">
                    <Checkbox/>
                </div>
                <div>
                    <Motivation/>
                </div>
                <div>
                    <TomatoCounter/>
                </div>
            </div>
        );
    }
}

export default App;
