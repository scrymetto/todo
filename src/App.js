import React, {Component} from 'react';
import  'typeface-roboto';
import './App.css';
import CheckboxBig from './Components/Checkbox'
import Greeting from './Components/Greeting'
import Motivation from './Components/Motivation'
import RandomWord from './Components/words/RandomWord'

class App extends Component {
    render() {
        return (
            <div>
                <Greeting className="Greeting"/>
                <div className="Content">
                    <div className="todo-list">
                        <h2>Список дел:</h2>
                        <CheckboxBig/>
                    </div>
                    <div>
                        <RandomWord/>
                    </div>
                </div>
                <div>
                    <Motivation/>
                </div>

            </div>
        );
    }
}

export default App;
