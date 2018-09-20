import React, { Component } from 'react';

import { STATUSES } from "../../common/constants";

import { Card, Avatar, InfoWrapper, IconWrapper, Icon } from './styled';

class CardComponent extends Component<{ person: Person, onStatusChange: Function }> {
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
            <Card>
                <InfoWrapper className="ca-card__info-wrapper">
                    <Avatar className="ca_card__info-wrapper__avatar">
                        <img src={person.picture.thumbnail} alt={name} />
                    </Avatar>
                    {name}
                </InfoWrapper>
                { this.hasPrevStatus() ? (
                    <IconWrapper left={true}
                        onClick={() => onStatusChange(person, -1)}
                    >
                        <Icon left={true}>&nbsp;</Icon>
                    </IconWrapper>
                ) : null }
                { this.hasNextStatus() ? (
                    <IconWrapper
                        onClick={() => onStatusChange(person, 1)}
                    >
                        <Icon>&nbsp;</Icon>
                    </IconWrapper>
                ) : null }
            </Card>
        );
    }
}

export default CardComponent;
