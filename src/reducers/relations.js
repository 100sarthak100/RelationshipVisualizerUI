import { FETCH_ALL_RELATIONS, CREATE_RELATION, FETCH_RELATION, DELETE_RELATION } from '../constants/actionTypes';

export const relationReducer = (relations = [], action) => {
    switch (action.type) {
        case FETCH_ALL_RELATIONS:
            return action.payload;
        case CREATE_RELATION:
            return [...relations, action.payload];
        case DELETE_RELATION:
            return relations.filter((relation) => relation._id !== action.payload);
        default:
            return relations;
    }
}

export const relationVisualizerReducer = (relationVis = [], action) => {
    switch (action.type) {
        case FETCH_RELATION:
            return action.payload;
        default:
            return relationVis;
    }
}
