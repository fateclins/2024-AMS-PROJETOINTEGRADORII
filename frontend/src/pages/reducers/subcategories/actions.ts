import { SubcategoryReducerType } from "./reducer";

export enum SubcategoriesActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  SELECT = "SELECT",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type SubcategoriesActions = {
  type:
    | SubcategoriesActionTypes.CREATE
    | SubcategoriesActionTypes.DELETE
    | SubcategoriesActionTypes.LIST
    | SubcategoriesActionTypes.SELECT
    | SubcategoriesActionTypes.UPDATE;
  payload: {
    data: SubcategoryReducerType;
  };
};

export function createSubcategoriesAction(data: SubcategoryReducerType) {
  return {
    type: SubcategoriesActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateSubcategoriesAction(data: SubcategoryReducerType) {
  return {
    type: SubcategoriesActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function selectSubcategoriesAction(data: SubcategoryReducerType) {
  return {
    type: SubcategoriesActionTypes.SELECT,
    payload: {
      data,
    },
  };
}

export function listSubcategoriesAction(data: SubcategoryReducerType) {
  return {
    type: SubcategoriesActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteSubcategoriesAction(data: SubcategoryReducerType) {
  return {
    type: SubcategoriesActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
