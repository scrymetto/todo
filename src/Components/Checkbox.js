import React from 'react';
import todosData from './todosData'
import Checkbox from '@material-ui/core/Checkbox';

function CheckCard(props) {
    return (
        <div className="todo-item">
            <Checkbox
                defaultChecked color="default"
                   checked={props.completed}
                   onChange={() => console.log('Changed!')}/>
            <p>{props.text}</p>
        </div>
    )
}

class CheckboxBig extends React.Component {

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

export default CheckboxBig;