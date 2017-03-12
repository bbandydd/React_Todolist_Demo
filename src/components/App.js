import React, { Component } from 'react';

import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <AddTodo />
                <TodoList />
            </div>
        );
    }
}