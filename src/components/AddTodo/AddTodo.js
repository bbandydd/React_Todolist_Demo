import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    changeText = (e) => {
        this.setState({
            text: e.target.value,
        });
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
                <Button bsStyle="primary">Add</Button>
                {' '}
                <Button bsStyle="info">Load From Server</Button>
            </Form>
        );
    }
}