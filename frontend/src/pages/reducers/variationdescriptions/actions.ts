import { VariationDescriptionReducerType } from "./reducer";

export enum VariationDescriptionsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  SELECT = "SELECT",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type VariationDescriptionsActions = {
  type:
    | VariationDescriptionsActionTypes.CREATE
    | VariationDescriptionsActionTypes.DELETE
    | VariationDescriptionsActionTypes.LIST
    | VariationDescriptionsActionTypes.SELECT
    | VariationDescriptionsActionTypes.UPDATE;
  payload: {
    data: VariationDescriptionReducerType;
  };
};

export function createVariationDescriptionsAction(
  data: VariationDescriptionReducerType,
) {
  return {
    type: VariationDescriptionsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateVariationDescriptionsAction(
  data: VariationDescriptionReducerType,
) {
  return {
    type: VariationDescriptionsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function selectVariationDescriptionsAction(
  data: VariationDescriptionReducerType,
) {
  return {
    type: VariationDescriptionsActionTypes.SELECT,
    payload: {
      data,
    },
  };
}

export function listVariationDescriptionsAction(
  data: VariationDescriptionReducerType,
) {
  return {
    type: VariationDescriptionsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteVariationDescriptionsAction(
  data: VariationDescriptionReducerType,
) {
  return {
    type: VariationDescriptionsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
