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

    render() {
        const { todos } = this.state;

        return (
            <div className="container">
                <AddTodo />
                <TodoList 
                    todos={todos}
                />
            </div>
        );
    }
}