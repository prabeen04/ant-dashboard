import { SET_SELECT_VALUE } from '../types/testFormActionTypes';

const initialState = {
    firstName: 'Paul',
    lastName: 'Pogba',
    location: 'Bhubaneswar',
    street: '',
    city: 'lucy',
}

export const formReducer = (state=initialState, action) => {
  switch(action.type){
    case SET_SELECT_VALUE:
        return Object.assign({}, state, {city: action.payload});
    default:
        return state;
  }
    return state
}