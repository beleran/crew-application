// @flow

import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


const graphQLUrl = "https://fakerql.com/graphql";

const cache = new InMemoryCache({
    dataIdFromObject: object => object.key || null
});

const defaults = {
    usersList: {
        crew: [],
        __typename: 'usersList',
    },
    filterList: {
        filters: {
            name: "",
            city: ""

        },
        __typename: 'filterList',
    }
};

const stateLink = withClientState({
    cache: cache,
    defaults: defaults,
    resolvers: {
        Mutation: {
            updateCrewState: (_, { person }, { cache }) => {
                let crew = cache.read("usersList").crew;
                crew = crew.filter((el) => el.id!==person.id);
                crew.push(person);
                const data = {
                    usersList: {
                        crew: crew,
                        __typename: 'usersList'
                    }
                };

                cache.writeData({ data });
                return null;
            },
            updateFilters: (_, { filters }, { cache }) => {
                const data = {
                    filterList: {
                        filters: filters,
                        __typename: 'filterList'
                    }
                };

                cache.writeData({ data });
                return null;
            }
        }
    }
});

const client = new ApolloClient({
    cache: cache,
    link: ApolloLink.from([stateLink, new HttpLink({ uri: graphQLUrl })])
});

client.onResetStore(stateLink.writeDefaults);

export default client;