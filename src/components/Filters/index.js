import React, { Component } from 'react';

import { FiltersWrapper, GroupWrapper } from './styled';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

const GET_FILTERS = gql`
  query {
      filterList @client{
        name
        city
      }
  }
`;

const UPDATE_FILTERS = gql`
  mutation UpdateFilters($name: String!, $city: String!) {
    updateFilters(name: $name, city: $city)  @client{
      filters{
        name
        city
      }
    }
  }
`;


class Filters extends Component<> {
    name: HTMLInputElement;
    city: HTMLInputElement;

    setFilters(e, updateFilters) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        updateFilters({ variables: {filters: { name: this.name.value, city: this.city.value }} });
        return false;
    }
    resetFilters(e, resetFilters) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        resetFilters({ variables: {filters: {  name: '', city: '' } }});

        return false;
    }
    render() {
        return (<Query
            query={GET_FILTERS}
        >
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                console.log(data);
                return (
                    <form onSubmit={(e) => this.setFilters(e)}>
                        <FiltersWrapper>
                            <GroupWrapper>
                                Name:&nbsp;
                                <input
                                    type="text"
                                    ref={(ref: HTMLInputElement | null) => { ref && (this.name = ref); }}
                                    defaultValue={data.name}
                                />
                            </GroupWrapper>
                            <GroupWrapper>
                                City:&nbsp;
                                <input
                                    type="text"
                                    ref={(ref: HTMLInputElement | null) => { ref && (this.city = ref); }}
                                    defaultValue={data.city}
                                />
                            </GroupWrapper>
                            <GroupWrapper>
                                <Mutation mutation={UPDATE_FILTERS} >
                                    {updateFilters => (
                                        <button type="submit" onClick={(e) => this.setFilters(e, updateFilters)}>Filter</button>
                                    )}
                                </Mutation>

                            </GroupWrapper>
                            <GroupWrapper><Mutation mutation={UPDATE_FILTERS} >
                                {resetFilters => (
                                    <button type="submit" onClick={(e) => this.resetFilters(e, resetFilters)}>Reset</button>
                                )}
                            </Mutation></GroupWrapper>
                        </FiltersWrapper>
                    </form>
                );
            }}
        </Query>)
    }
}




export default Filters;
