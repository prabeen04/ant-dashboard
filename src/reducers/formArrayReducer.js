import { SET_CURRENCY, SET_AMOUNT, SET_AMOUNT_IN_CURRENCY } from '../types/formArrayActionTypes';

const initialState = {
    currency: 'rupees'
}

export const formArrayReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return Object.assign({}, state, { currency: action.payload });
        case SET_AMOUNT:
            //return Object.assign({}, state, { date: moment(action.payload) });
        case SET_AMOUNT_IN_CURRENCY:
            //return Object.assign({}, state, { date: moment(action.payload) });
        default:
            return state;
    }
    return state;
}