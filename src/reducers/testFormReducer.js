import { SET_SELECT_VALUE, SET_DATE } from '../types/testFormActionTypes';
import moment from 'moment';
const initialState = {
    firstName: 'Paul',
    lastName: 'Pogba',
    location: 'Bhubaneswar',
    street: '',
    city: '',
    date: null
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECT_VALUE:
            return { ...state, city: action.payload };
        case SET_DATE:
            return { ...state, date: moment(action.payload) };
        default:
            return state;
    }
    return state
}