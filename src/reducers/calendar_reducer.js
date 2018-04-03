import { GET_EVENTS, ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE } from '../types/calendar_actiontypes';

const initialState ={
    isLoading: false,
    isError: false,
    events: []
}
export const calendarReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EVENTS:
            console.log('get events fired')
            // return Object.assign({}, ...state, {isLoading: true})
             return {
                isLoading: true,
                isError: false,
                events: []
            }
        default:
            return state    
    }
    return state;
}