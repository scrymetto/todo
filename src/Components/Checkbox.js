import React from 'react';
import todosData from './todosData'

function CheckCard(props) {
    return (
        <div className="todo-item">
            <input type="checkbox"
                   checked={props.completed}
                   onChange={() => console.log('Changed!')}/>
            <p>{props.text}</p>
        </div>
    )
}

class Checkbox extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: todosData,
        }

    }

    render() {
        return (
            <div>
                {
                    this.state.todos.map(el =>
                        <CheckCard
                            key={el.id}
                            text={el.text}
                            completed={el.completed}
                                                    />
                    )
                }
            </div>
        )
    }
}

export default Checkbox;