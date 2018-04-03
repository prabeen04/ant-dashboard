import { GET_EVENTS, ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from '../types/calendar_actiontypes';

const initialState ={
    isLoading: false,
    isError: false,
    events: []
}
export const calendarReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EVENTS:
            return Object.assign({}, state, {isLoading: true})
        case GET_EVENTS_SUCCESS:
            return Object.assign({}, state, {isLoading: false})
        case GET_EVENTS_FAILURE:
            return Object.assign({}, state, {isLoading: false, isError: true})
        default:
            return state    
    }
    return state;
}