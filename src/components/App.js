import React, { Component } from 'react';

import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        };
    }

    handleAddTodo = (text) => {
        const { todos } = this.state;

        this.setState({
            todos: [
                ...todos,
                { text }
            ]
        });
    }

    handleRemoveTodo = (idx) => {
        const { todos } = this.state;

        this.setState({
            todos: [
                ...todos.slice(0, idx),
                ...todos.slice(idx + 1),
            ]
        });
    }

    render() {
        const { todos } = this.state;

        return (
            <div className="container">
                <AddTodo 
                    handleAddTodo={this.handleAddTodo}
                />
                <TodoList 
                    todos={todos}
                    handleRemoveTodo={this.handleRemoveTodo}
                />
            </div>
        );
    }
}