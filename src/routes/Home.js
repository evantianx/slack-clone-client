import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { SSL_OP_PKCS1_CHECK_1 } from "constants";

const Home = ({ data: { loading, allUsers } }) =>
  loading ? null : allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

const allUsersQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`;

export default graphql(allUsersQuery)(Home);
