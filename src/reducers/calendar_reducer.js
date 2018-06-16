import {
    GET_EVENTS, ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE,
    SET_DATE
} from '../types/calendar_actiontypes';
import moment from 'moment';
const initialState = {
    isLoading: false,
    isError: false,
    startDate: '',
    endDate: '',
    events: []
}
export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        
        // Set date on date selection
        case SET_DATE:
            return { ...state, startDate: moment(action.payload.start), endDate: moment(action.payload.end) }

        // get events on start    
        case GET_EVENTS:
            return { ...state, isLoading: true }
        case GET_EVENTS_SUCCESS:
            return { ...state, isLoading: false, events: action.payload }
        case GET_EVENTS_FAILURE:
            return { ...state, isLoading: false, isError: true }

        // adding events
        case ADD_EVENT:
            return { ...state, isLoading: true }
        case ADD_EVENT_SUCCESS:
            return { ...state, isLoading: false }
        case ADD_EVENT_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
    return state;
}