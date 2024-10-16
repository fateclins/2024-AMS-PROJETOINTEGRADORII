import { VariationValuesActions, VariationValuesActionTypes } from "./actions";

export interface VariationValuesReducerType {
    id: number,
    country: string,
    state: string,
    city: string,
    district: string,
    street: string,
    number: string,
    complement: string,
    userId: string,
}[]

export function variationvaluesReducer(state: VariationValuesReducerType, action: VariationValuesActions) {
    switch(action.type) {
        case VariationValuesActionTypes.CREATE:
            
        case VariationValuesActionTypes.DELETE:

        case VariationValuesActionTypes.LIST:

        case VariationValuesActionTypes.SELECT:

        case VariationValuesActionTypes.UPDATE:

        default:
            return state
    }
}