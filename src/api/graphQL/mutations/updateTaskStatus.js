import { gql } from "@apollo/client";

const UPDATE_TASK_STATUS = gql(`
mutation updateTaskStatus($id: ID!, $taskStatus: String!) {
  updateTaskStatus(id: $id, taskStatus: $taskStatus) {
    description
    id
    owner
    taskStatus
    title
  }
}`);

export default UPDATE_TASK_STATUS;
