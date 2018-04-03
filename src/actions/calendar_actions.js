import { GET_EVENTS, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE, ADD_EVENT, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE } from '../types/calendar_actiontypes';
import axios from 'axios';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/events';

export const getEvents = () => {
    return (dispatch) => {
        dispatch({
            type: GET_EVENTS
        })
        return axios.get(`${baseURL}`)
            .then(response => {
                console.log(response)
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