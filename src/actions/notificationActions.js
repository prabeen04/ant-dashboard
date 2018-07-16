import { GET_PRESENT_NOTIFICATIONS } from '../types/notificationActionTypes';
import axios from 'axios';

export const getPresentNotifications = dispatch =>{
    return dispatch({
        type: FETCHING_NOTIFICATIONS
    })
}