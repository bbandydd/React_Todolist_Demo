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

    render() {
        const { todos } = this.state;

        return (
            <div className="container">
                <AddTodo 
                    handleAddTodo={this.handleAddTodo}
                />
                <TodoList 
                    todos={todos}
                />
            </div>
        );
    }
}