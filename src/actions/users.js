import { CREATE_USER, FETCH_ALL_USERS, DELETE_USER } from '../constants/actionTypes';
import * as api from '../api';

// ACTION CREATORS

// Get all users
export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        const action = {
            type: FETCH_ALL_USERS,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};

// Create a user
export const create = (formData, history) => async (dispatch) => {
    try {
        // create user
        const { data } = await api.createUser(formData);
        const action = {
            type: CREATE_USER,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

// Delete a user
export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);
        const action = {
            type: DELETE_USER,
            payload: id
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};