import React from 'react';
import todosData from './todosData'

function CheckCard(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.completed}/>
            <p>{props.text}</p>
        </div>
    )
}

function Checkbox() {
    return (
        <div>
            {
                todosData.map(el =>
                    <CheckCard
                        key = {el.id}
                        text = {el.text}
                        completed = {el.completed}
                    />
                )
            }
        </div>
    )
}

export default Checkbox;