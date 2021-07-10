import {FETCH_ALL_RELATIONS, FETCH_RELATION, CREATE_RELATION, DELETE_RELATION } from '../constants/actionTypes';
import * as api from '../api';

// ACTION CREATORS

// Get relation (degree of seperation) between 2 users
export const getRelation = (relation) => async (dispatch) => {
    try {
        // console.log(relation);
        const { data } = await api.fetchRelation(relation);
        // console.log(data);
        const action = {
            type: FETCH_RELATION,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};

// Get all added relations
export const getAllRelations = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllRelation();

        const action = {
            type: FETCH_ALL_RELATIONS,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};

// Create a relation
export const createRelations = (relation) => async (dispatch) => {
    try {
        const { data } = await api.createRelation(relation);
        // console.log(data);
        const action = {
            type: CREATE_RELATION,
            payload: data 
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

// Delete a relation
export const deleteRelation = (id) => async (dispatch) => {
    try {
        await api.deleteRelation(id);
        const action = {
            type: DELETE_RELATION,
            payload: id
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};