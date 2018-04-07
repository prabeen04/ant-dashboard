import { GET_PROFILES, GET_PROFILES_SUCCESS, GET_PROFILES_FAILURE, ADD_PROFILE, ADD_PROFILE_SUCCESS, ADD_PROFILE_FAILURE } from '../types/profile_actiontypes';
import axios from 'axios';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/users';

export const getProfiles = () => {
    return (dispatch) => {
        dispatch({
            type: GET_PROFILES
        })
        return axios.get(`${baseURL}`)
            .then(response => {
                console.log(response)
                dispatch({
                    type: GET_PROFILES_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_PROFILES_FAILURE
                })
            });
    }
}
export const addProfile = (profile) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PROFILE
        })
        return axios.post(`${baseURL}`,{profile})
            .then(response => {
                console.log(response)
                dispatch(getProfiles())
            })
            .catch(error => {
                dispatch({
                    type: ADD_PROFILE_FAILURE
                })
            });
    }
}