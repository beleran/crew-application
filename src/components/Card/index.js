import React, {Component} from 'react';

import {STATUSES} from "../../common/constants";
import {Mutation} from 'react-apollo';
import {Card, Avatar, InfoWrapper, IconWrapper, Icon} from './styled';
import gql from "graphql-tag";


const UPDATE_CREW = gql`
  mutation UpdateCrewState($crew: Array) {
    updateCrewState(crew: $crew)  @client{
        crew
    }
  }
`;

class CardComponent extends Component<{ person: Person }> {
    hasNextStatus() {
        return STATUSES.indexOf(this.props.person.status) !== STATUSES.length - 1;
    }

    hasPrevStatus() {
        return STATUSES.indexOf(this.props.person.status) !== 0;
    }

    onStatusChange(updateCrewState, person, new_state) {
        console.log(this);
        person.state = new_state;
        console.log(updateCrewState);
        updateCrewState({variables: { person}});
    }

    render() {
        const {person} = this.props;
        const name = `${person.firstName} ${person.lastName}`;
        return (
            <Card>
                <InfoWrapper className="ca-card__info-wrapper">
                    <Avatar className="ca_card__info-wrapper__avatar">
                        <img src={person.avatar} alt={person.lastName}/>
                    </Avatar>
                    {name}
                </InfoWrapper>
                <Mutation mutation={UPDATE_CREW}>
                    {updateCrewState => (
                        <div>
                            {
                                this.hasPrevStatus() ? (
                                    <IconWrapper left={true}
                                                 onClick={() => this.onStatusChange(updateCrewState, person, -1)}
                                    >
                                        <Icon left={true}>&nbsp;</Icon>
                                    </IconWrapper>
                                ) : null}
                            {this.hasNextStatus() ? (
                                <IconWrapper
                                    onClick={() => this.onStatusChange(updateCrewState, person, 1)}
                                >
                                    <Icon>&nbsp;</Icon>
                                </IconWrapper>
                            ) : null}
                        </div>
                    )}
                </Mutation>
            </Card>
        );
    }
}

export default CardComponent;
