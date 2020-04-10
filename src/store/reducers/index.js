import {combineReducers, createStore} from 'redux';
import {character} from './characterReducer'

const reducers = combineReducers({characters: character});

export const store = createStore(reducers);
