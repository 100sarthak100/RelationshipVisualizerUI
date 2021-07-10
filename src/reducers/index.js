import { combineReducers } from 'redux';

import users from './users';
import { relationReducer, relationVisualizerReducer } from './relations';

export default combineReducers({
    users,
    relations: relationReducer,
    relationVis: relationVisualizerReducer
});