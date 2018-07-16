import { GET_PAST_NOTIFICATIONS, GET_PRESENT_NOTIFICATIONS, GET_FUTURE_NOTIFICATIONS } from '../types/notificationActionTypes'

export const notificationReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PAST_NOTIFICATIONS:
            return state;
        case GET_PRESENT_NOTIFICATIONS:
            return state;
        case GET_FUTURE_NOTIFICATIONS:
            return state;
        default:
            return state;    
    }

    return state
}