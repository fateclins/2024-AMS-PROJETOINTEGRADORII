import { VariationDescriptionsActions, VariationDescriptionsActionTypes } from "./actions";

export interface VariationDescriptionsReducerType {
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

export function variationdescriptionsReducer(state: VariationDescriptionsReducerType, action: VariationDescriptionsActions) {
    switch(action.type) {
        case VariationDescriptionsActionTypes.CREATE:
            
        case VariationDescriptionsActionTypes.DELETE:

        case VariationDescriptionsActionTypes.LIST:

        case VariationDescriptionsActionTypes.SELECT:

        case VariationDescriptionsActionTypes.UPDATE:

        default:
            return state
    }
}