import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { STATUSES } from "../../common/constants";

import './styles.scss';

class Card extends Component {
    hasNextStatus() {
        return STATUSES.indexOf(this.props.person.status) !== STATUSES.length - 1;
    }
    hasPrevStatus() {
        return STATUSES.indexOf(this.props.person.status) !== 0;
    }
    render() {
        const { person, onStatusChange } = this.props;
        const name = `${person.name.first} ${person.name.last}`;
        return (
            <div className="ca-card">
                <div className="ca-card__info-wrapper">
                    <div className="ca_card__info-wrapper__avatar">
                        <img src={person.picture.thumbnail} alt={name} />
                    </div>
                    <div className="ca_card__info-wrapper__name">{name}</div>
                </div>
                { this.hasPrevStatus() ? (
                    <div
                        className="ca_card__change-status prev-status"
                        onClick={() => onStatusChange(person, -1)}
                    >&nbsp;</div>
                ) : null }
                { this.hasNextStatus() ? (
                    <div
                        className="ca_card__change-status next-status"
                        onClick={() => onStatusChange(person, 1)}
                    >&nbsp;</div>) : null }
            </div>
        );
    }
}

Card.propTypes = {
    person: PropTypes.object,
    onStatusChange: PropTypes.func.isRequired,
};

Card.defaultProps = {
    person: {},
};

/*.shape({
    gender: PropTypes.string,
    name: PropTypes.shape({
        title: PropTypes.string,
        first: PropTypes.string,
        last: PropTypes.string,
    })
})*/

export default Card;
