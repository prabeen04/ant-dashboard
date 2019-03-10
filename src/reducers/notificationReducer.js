import {
    GET_PAST_NOTIFICATIONS,
    GET_PRESENT_NOTIFICATIONS, GET_PRESENT_NOTIFICATIONS_SUCCESS, GET_PRESENT_NOTIFICATIONS_FAILURE,
    GET_FUTURE_NOTIFICATIONS, GET_FUTURE_NOTIFICATIONS_SUCCESS, GET_FUTURE_NOTIFICATIONS_FAILURE,
    FETCHING_NOTIFICATIONS
} from '../types/notificationActionTypes'
const initialState = {
    isError: false,
    error: {},
    isFetching: false,
    pastNotifications: [],
    presentNotifications: [],
    futureNotifications: []
}
export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTIFICATIONS:
            return { ...state, isFetching: true };
        case GET_PAST_NOTIFICATIONS:
            return state;
        case GET_PRESENT_NOTIFICATIONS:
            return { ...state, isFetching: true };
        case GET_PRESENT_NOTIFICATIONS_SUCCESS:
            return { ...state, isFetching: false, presentNotifications: action.payload };
        case GET_PRESENT_NOTIFICATIONS_FAILURE:
            return { ...state, isFetching: false, isError: true };
        case GET_FUTURE_NOTIFICATIONS:
            return { ...state, isFetching: true };
        case GET_FUTURE_NOTIFICATIONS_SUCCESS:
            return { ...state, isFetching: false, futureNotifications: action.payload };
        case GET_FUTURE_NOTIFICATIONS_FAILURE:
            return { ...state, isFetching: false, isError: true };
        default:
            return state;
    }

    return state
}