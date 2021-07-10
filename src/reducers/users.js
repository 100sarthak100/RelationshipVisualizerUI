import { FETCH_ALL_USERS, CREATE_USER, DELETE_USER } from '../constants/actionTypes';

const reducer = (users = [], action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return action.payload;
        case CREATE_USER:
            return [...users, action.payload];
        case DELETE_USER:
            return users.filter((user) => user._id !== action.payload);
        default:
            return users;
    }
}

export default reducer;