import React from 'react';
import todosData from './todosData'
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


class CheckboxBig extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: todosData,
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            let update = prevState.todos.map(el => {
                if (el.id === id) {
                    el.completed = !el.completed
                }
                return el
            });
            return {
                todos: update
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.todos.map(item => {
                        if (!item.completed) {
                            return <CheckCard
                                item={item}
                                key={item.id}
                                text={item.text}
                                completed={item.completed}
                                handleChange={this.handleChange}
                            />
                        }
                    })
                }
                {
                    this.state.todos.map(item => {
                    if (item.completed) {
                    return <CheckCard
                    item={item}
                    key={item.id}
                    text={item.text}
                    completed={item.completed}
                    handleChange={this.handleChange}
                    />
                }
                })
                }
            </div>
        )
    }
}

export default CheckboxBig;