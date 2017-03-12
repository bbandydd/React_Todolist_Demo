import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';

const getData = (url) => fetch(url).then(response => response.json());

export default class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    addTodo = (text) => {
        const { handleAddTodo } = this.props;
        handleAddTodo(text);

        this.setState({
            text: '',
        });
    }

    changeText = (e) => {
        this.setState({
            text: e.target.value,
        });
    }

    loadFromServer = async () => {
        const { handleAddTodo } = this.props;

        const url = 'https://bbandydd.github.io/React_Redux_Todolist/initial.json';
        const data = await getData(url);
        data.forEach(todo => handleAddTodo(todo.text));
    }

    render() {
        const { text } = this.state;

        return (
            <Form inline>
                 <FormControl
                    type="text"
                    placeholder="Todo..."
                    onChange={this.changeText}
                    value={text}
                />
                {' '}
                <Button bsStyle="primary" onClick={() => this.addTodo(text)}>Add</Button>
                {' '}
                <Button bsStyle="info" onClick={this.loadFromServer}>Load From Server</Button>
            </Form>
        );
    }
}