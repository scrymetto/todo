import React from 'react';
import todosData from './todosData';
import CheckCard from './CheckCard';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

class Checkbox extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: todosData
        };
        this.state.todos.reverse();
        this.textInput = null;
        this.setTextInputRef = el => {
            this.textInput = el
        };
        this.handleChange = this.handleChange.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const index = prevState.todos.findIndex(todo => todo.id === id);
            if (index >= 0) {
                const el = prevState.todos.splice(index, 1)[0];
                el.completed = !el.completed;
                const newState = {
                    todos: [el, ...prevState.todos]
                };
                return Object.assign(prevState, newState);
            }
        })
    }

    confirm() {
        this.setState(prevState => {
            let update = this.textInput.value;
            this.textInput.value = '';
            let newTask = {
                id: prevState.todos.length + 1,
                text: update,
                completed: false
            };
            prevState.todos.splice(0, 0, newTask);
            return {
                todos: prevState.todos
            }
        })
    }

    render() {
        return (
            <div>
                <TextField className="todo-item"
                           type="text"
                           fullWidth
                           label="New task"
                           InputProps={{inputRef: this.setTextInputRef}}
                />
                <Button onClick={this.confirm}>Confirm</Button>
                {
                    this.state.todos
                        .filter(item => !item.completed)
                        .map(item => <CheckCard
                            item={item}
                            key={item.id}
                            text={item.text}
                            completed={item.completed}
                            handleChange={this.handleChange}
                        />)
                }
                {
                    this.state.todos
                        .filter(item => item.completed)
                        .map(item => <CheckCard
                            item={item}
                            key={item.id}
                            text={item.text}
                            completed={item.completed}
                            handleChange={this.handleChange}
                        />)
                }
            </div>
        )
    }
}

export default Checkbox;