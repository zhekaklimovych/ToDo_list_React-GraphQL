import { gql } from "@apollo/client";

const GET_TASK = gql(`
query getTask($id: ID!) {
  getTask(id: $id) {
    description
    id
    owner
    taskStatus
    title
   }
}`);

export default GET_TASK;
