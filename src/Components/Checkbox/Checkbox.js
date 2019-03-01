import React from 'react';
import todosData from './todosData';
import CheckCard from './CheckCard';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

class Checkbox extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: todosData,
            current: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.change = this.change.bind(this);
        this.confirm = this.confirm.bind(this);
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

    change(event) {
        this.setState(prevState => {
            let update = event.target.value;
            return {
                todos: prevState.todos,
                current: update,
            }
        })
    }

    confirm() {
        this.setState(prevState => {
            let update = prevState.current;
            let newTask = {
                id: prevState.todos.length + 1,
                text: update,
                completed: false
            };
            prevState.todos.push(newTask);
            return {
                todos: prevState.todos,
                current: ''
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
                           value={this.state.current}
                           onChange={(event) => {
                               event.persist();
                               this.change(event);
                           }
                           }
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