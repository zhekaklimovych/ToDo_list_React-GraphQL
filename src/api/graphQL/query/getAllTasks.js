import { gql } from "@apollo/client";

const GET_ALL_TASKS = gql(`
query allTasks($limit: Int!,$nextToken: String) {
  allTasks(limit: $limit, nextToken: $nextToken) {
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

export default GET_ALL_TASKS;
