import React, {Component} from 'react';
import Card from '../Card';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {STATUSES} from "../../common/constants";

import {Table, Column, Title, Content} from './styled';

const GET_CREW = gql`
  query {
      allUsers(count:10){
        email
        lastName
        firstName
        id
        avatar
      }
  }
`;


class CardsTable extends Component<> {
    renderColumn(status: string, data) {
        return (

            <Column key={status ? status : 0}>
                <Title>{status}</Title>
                <Content>
                    {data.allUsers.filter(person => person.status === status).map((person, index) => (
                        <Card person={person}  key={person.id}/>
                    ))}
                </Content>
            </Column>
        )
    }


    render() {
        return (<Query
            query={GET_CREW}
        >
            {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                this.data = data;
                return (<Table>
                    {STATUSES.map(status => this.renderColumn(status, data))}
                </Table>);
            }}
        </Query>)
    }
}


export default CardsTable;
