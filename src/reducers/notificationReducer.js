import { GET_PAST_NOTIFICATIONS, GET_PRESENT_NOTIFICATIONS, GET_FUTURE_NOTIFICATIONS } from '../types/notificationActionTypes'
const initialState = {
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
}
export const notificationReducer = (state = initialState, action) => {
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