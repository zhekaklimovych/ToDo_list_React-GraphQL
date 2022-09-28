import {gql} from "@apollo/client";

export default gql(`
query {
  listEvents(limit: 1000) {
    items {
      id
      name
      where
      when
      description
      comments {
        items {
          commentId
        }
      }
    }
  }
}`);
