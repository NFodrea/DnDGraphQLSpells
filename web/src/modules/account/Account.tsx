import * as React from 'react'
import { Query } from 'react-apollo';
import {gql} from 'apollo-boost'
import {MeQuery} from 'src/schemaTypes'
import { Redirect } from 'react-router-dom';

const meQuery = gql `
  query MeQuery{
    me {
      id
      email
    }
  }
`;

export default class Account extends React.Component {
  render() {
    return (
      <Query<MeQuery> fetchPolicy="network-only" query={meQuery}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }

          if (!data) {
            return <div>data is undefined</div>;
          }

          if (!data.me) {
             return <Redirect to="/login" />;
          }

          return <div>{data.me.email}</div>;
        }}
      </Query>
    );
  }
  }
