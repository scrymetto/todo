import React from 'react';
import 'typeface-roboto';
import './App.css';
import Checkbox from './Components/Checkbox/Checkbox'
import Greeting from './Components/Greeting'
import Motivation from './Components/Motivation'
import RandomWord from './Components/words/RandomWord'

class App extends React.Component {
    render() {
        return (
            <div>
                <Greeting className="Greeting"/>

                <div className="Content">
                    <div className="todo-list">
                        <h2>Tasks for today:</h2>
                        <Checkbox/>
                    </div>

                    <div>
                        <RandomWord/>
                    </div>
                </div>

                <footer>
                    <Motivation/>
                </footer>
            </div>

        );
    }
}

export default App;
