import { SET_SELECT_VALUE, SET_DATE } from '../types/testFormActionTypes';

const initialState = {
    firstName: 'Paul',
    lastName: 'Pogba',
    location: 'Bhubaneswar',
    street: '',
    city: '',
    date: ''
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECT_VALUE:
            return Object.assign({}, state, { city: action.payload });
        case SET_DATE:
            return Object.assign({}, state, { date: action.payload });
        default:
            return state;
    }
    return state
}