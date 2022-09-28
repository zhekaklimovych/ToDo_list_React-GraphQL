import {gql} from "@apollo/client";

export default gql(`
subscription($eventId: String!) {
  subscribeToEventComments(eventId: $eventId) {
    eventId
    commentId
    content
    createdAt
  }
}`);

