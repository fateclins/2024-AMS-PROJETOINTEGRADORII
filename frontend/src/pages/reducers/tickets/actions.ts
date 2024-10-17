import { TicketReducerType } from "./reducer";

export enum TicketsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  SELECT = "SELECT",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type TicketsActions = {
  type:
    | TicketsActionTypes.CREATE
    | TicketsActionTypes.DELETE
    | TicketsActionTypes.LIST
    | TicketsActionTypes.SELECT
    | TicketsActionTypes.UPDATE,
  payload: {
    data: TicketReducerType;
  };
};

export function createTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function selectTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.SELECT,
    payload: {
      data,
    },
  };
}

export function listTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
