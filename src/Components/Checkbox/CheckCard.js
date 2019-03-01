import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function CheckCard(props) {
    return (
        <div className="todo-item">
            <Checkbox
                color="default"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}/>
            <p className={props.item.completed ? "done" : null}>{props.item.text}</p>
        </div>
    )
}

export default CheckCard