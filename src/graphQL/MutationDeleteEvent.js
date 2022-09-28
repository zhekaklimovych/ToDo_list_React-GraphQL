import {gql} from "@apollo/client";

export default gql(`
mutation($id: ID!) {
  deleteEvent(id: $id) {
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
}`);
