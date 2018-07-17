import {
    GET_PAST_NOTIFICATIONS, GET_PRESENT_NOTIFICATIONS, GET_PRESENT_NOTIFICATIONS_SUCCESS,
    GET_PRESENT_NOTIFICATIONS_FAILURE, FETCHING_NOTIFICATIONS
} from '../types/notificationActionTypes'
const initialState = {
    isError: {},
    isFetching: false,
    pastNotifications: [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        }
    ],
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
        default:
            return state;
    }

    return state
}