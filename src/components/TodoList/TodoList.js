import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

export default class TodoList extends Component {
    constructor() {
        super();
    }

    render() {
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
                    <tr>
                        <td className="text-center">
                            1
                        </td>
                        <td>
                            Test
                        </td>
                        <td className="text-center">
                            <Button bsStyle="danger">X</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}