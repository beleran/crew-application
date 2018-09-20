import React, { Component } from 'react';
import Card from '../Card';
import { STATUSES } from "../../common/constants";

import { Table, Column, Title, Content } from './styled';

class CardsTable extends Component<{ crew: Person[], onStatusChange: Function }> {
    renderColumn(status: string) {
        const { crew, onStatusChange } = this.props;
        return (
            <Column key={status}>
                <Title>{status}</Title>
                <Content>
                    { crew.filter(person => person.status === status).map(person => (
                        <Card person={person} onStatusChange={onStatusChange} key={person.login.uuid} />
                    )) }
                </Content>
            </Column>
        )
    }
    render() {
        return (
            <Table>
                { STATUSES.map(status => this.renderColumn(status))}
            </Table>
        );
    }
}

export default CardsTable;
