import {gql} from "@apollo/client";

export const GET_ALL_TASKS = gql(`
query allTasks($nextToken: String) {
  allTasks(nextToken: $nextToken) {
    items {
      description
      id
      owner
      taskStatus
      title
    }
    nextToken
  }
}`);

export const GET_TASK = gql(`
query getTask($id: ID!) {
  getTask(id: $id) {
    description
    id
    owner
    taskStatus
    title
   }
}`);