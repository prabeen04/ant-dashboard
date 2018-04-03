import { GET_EVENTS, ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE } from '../types/calendar_actiontypes';

export const calendarReducer = (state = {}, action) => {
    switch(action.type){
        case GET_EVENTS:
            return Object.assign({}, state)
    }
    return state;
}