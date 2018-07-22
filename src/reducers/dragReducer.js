import { GET_TEAMS, GET_TEAMS_SUCCESS, GET_TEAMS_FAILURE } from '../types/dragActionTypes';
const initialState = {

}

export const dragReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEAMS:
            return state
        default:
            return state;
    }
    return state;
}