import { gql } from "@apollo/client";

const UPDATE_TASK_BODY = gql(`
mutation updateTaskBody($description: String!, $id: ID!, $title: String!) {
  updateTaskBody(description: $description, id: $id, title: $title) {
    description
    id
    owner
    taskStatus
    title
  }
}`);

export default UPDATE_TASK_BODY;
