import {
    GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE, ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE,
    SET_DATE
} from '../types/calendar_actiontypes';
import axios from 'axios';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/events';

export const setDate = (dates) => {
    console.log(dates)
    return (dispatch) => {
        dispatch({
            type: SET_DATE,
            payload: dates
        })
    }
}

export const getEvents = () => {
    return (dispatch) => {
        dispatch({
            type: GET_EVENTS
        })
        return axios.get(`${baseURL}`)
            .then(response => {
                dispatch({
                    type: GET_EVENTS_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_EVENTS_FAILURE
                })
            });
    }
}
export const addEvent = (calendarEvent) => {
    console.log(calendarEvent)
    return (dispatch) => {
        dispatch({
            type: ADD_EVENT
        })
        return axios.post(`${baseURL}`, calendarEvent)
            .then(response => {
                console.log(response)
                dispatch(getEvents())
            })
            .catch(error => {
                dispatch({
                    type: ADD_EVENT_FAILURE
                })
            });
    }
}