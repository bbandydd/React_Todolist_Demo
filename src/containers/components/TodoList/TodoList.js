import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

export default class TodoList extends Component {
    componentDidMount() {
        this.props.loadFromServer();
    }

    render() {
        const { todos, handleRemoveTodo } = this.props;

        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th className="text-center" style={{width: '100px'}}>No.</th>
                        <th className="text-center">Todo</th>
                        <th className="text-center" style={{width: '100px'}}></th>
                    </tr>
                </thead>
                <tbody>
                    { todos.map((todo, idx) => (
                        <tr key={`todo_${idx}`}>
                            <td className="text-center">
                                {idx + 1}
                            </td>
                            <td>
                                {todo.text}
                            </td>
                            <td className="text-center">
                                <Button bsStyle="danger" onClick={() => handleRemoveTodo(idx)}>X</Button>
                            </td>
                        </tr>)
                    )}
                </tbody>
            </Table>
        );
    }
}