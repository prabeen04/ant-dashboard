import { GET_PRESENT_NOTIFICATIONS, FETCHING_NOTIFICATIONS } from '../types/notificationActionTypes';
import axios from 'axios';

const notificationURL = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export const getPresentNotifications = dispatch => {
    return dispatch({
        type: FETCHING_NOTIFICATIONS
    })
    return axios.get(notificationURL)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}