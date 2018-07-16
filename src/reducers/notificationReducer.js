import { GET_PAST_NOTIFICATIONS, GET_PRESENT_NOTIFICATIONS, GET_FUTURE_NOTIFICATIONS, FETCHING_NOTIFICATIONS } from '../types/notificationActionTypes'
const initialState = {
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
            return {...state, isFetching: true};
        case GET_PAST_NOTIFICATIONS:
            return state;
        case GET_PRESENT_NOTIFICATIONS:
            return { ...state, isFetching: false, presentNotifications: action.payload };
        case GET_FUTURE_NOTIFICATIONS:
            return state;
        default:
            return state;
    }

    return state
}