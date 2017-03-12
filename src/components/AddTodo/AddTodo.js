import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class AddTodo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Form inline>
                 <FormControl
                    type="text"
                    placeholder="Todo..."
                />
                {' '}
                <Button bsStyle="primary">Add</Button>
                {' '}
                <Button bsStyle="info">Load From Server</Button>
            </Form>
        );
    }
}