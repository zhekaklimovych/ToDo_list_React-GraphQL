import { gql } from "@apollo/client";

const CREATE_TASK = gql(`
mutation createTask($description: String!, $owner: String!, $taskStatus: String!, $title: String!) {
  createTask(
    description: $description,
    owner: $owner,
    taskStatus: $taskStatus,
    title: $title
  ) {
    id
    description
    owner
    taskStatus
    title
  }
}`);

export default CREATE_TASK;
