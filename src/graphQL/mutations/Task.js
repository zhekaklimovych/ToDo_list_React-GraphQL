import {gql} from "@apollo/client";

export const CREATE_TASK =  gql(`
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

export const UPDATE_TASK_BODY = gql(`
mutation updateTaskBody($description: description!, $id: ID!, $title: String!) {
  updateTaskBody(
    description: $description,
    id: $id,
    title: $title
  ) {
    description
    id
    owner
    taskStatus
    title
  }
}`);

export const UPDATE_TASK_STATUS = gql(`
mutation updateTaskStatus($id: ID!, $taskStatus: String!) {
  updateTaskStatus(id: $id, taskStatus: $taskStatus) {
    description
    id
    owner
    taskStatus
    title
  }
}`);