import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

import { STATUSES } from "../../common/constants";

import './styles.scss';

class CardsTable extends Component {
    renderColumn(status) {
        const { crew, onStatusChange } = this.props;
        return (
            <div className="ca-cards-table__column" key={status}>
                <div className="ca-cards-table__column__title">{status}</div>
                <div className="ca-cards-table__column__cards-wrapper">
                    { crew.filter(person => person.status === status).map(person => (
                        <Card person={person} onStatusChange={onStatusChange} key={person.login.uuid} />
                    )) }
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="ca-cards-table">
                { STATUSES.map(status => this.renderColumn(status))}
            </div>
        );
    }
}

CardsTable.propTypes = {
    crew: PropTypes.array,
    onStatusChange: PropTypes.func.isRequired,
};

CardsTable.defaultProps = {
    crew: [],
};

export default CardsTable;
