import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import * as todoAction from '../redux/todo/todoAction';

@connect(
    (state) => ({
        todos: state.todoReducer,
    }), { 
        ...todoAction 
    }
)
export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        const { todos, addTodo, removeTodo, loadFromServer } = this.props;

        return (
            <div className="container">
                <AddTodo 
                    handleAddTodo={addTodo}
                    loadFromServer={loadFromServer}
                />
                <TodoList 
                    todos={todos}
                    handleRemoveTodo={removeTodo}
                />
            </div>
        );
    }
}