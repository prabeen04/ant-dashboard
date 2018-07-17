import {
    GET_PRESENT_NOTIFICATIONS, GET_PRESENT_NOTIFICATIONS_SUCCESS, GET_PRESENT_NOTIFICATIONS_FAILURE,
    GET_FAILURE_NOTIFICATIONS, GET_FAILURE_NOTIFICATIONS_SUCCESS, GET_FAILURE_NOTIFICATIONS_FAILURE
} from '../types/notificationActionTypes';
import axios from 'axios';

const notificationURL = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export const getPresentNotifications = () => dispatch => {
    console.log('inside notification action')
    dispatch({
        type: GET_PRESENT_NOTIFICATIONS
    })
    return axios.get(`${notificationURL}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_PRESENT_NOTIFICATIONS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_PRESENT_NOTIFICATIONS_FAILURE,
                payload: err
            })
        })
}
export const getFutureNotifications = () => dispatch => {
    dispatch({
        type: GET_FUTURE_NOTIFICATIONS
    })
    return axios.get(`${notificationURL}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_FUTURE_NOTIFICATIONS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_FUTURE_NOTIFICATIONS_FAILURE,
                payload: err
            })
        })
}