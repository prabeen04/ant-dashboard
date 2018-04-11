import { 
    GET_PROFILES, GET_PROFILES_SUCCESS, GET_PROFILES_FAILURE, 
    GET_SINGLE_PROFILE, GET_SINGLE_PROFILE_SUCCESS, GET_SINGLE_PROFILE_FAILURE, 
    SHOW_ADD_PROFILE, ADD_PROFILE, ADD_PROFILE_SUCCESS, ADD_PROFILE_FAILURE } from '../types/profile_actiontypes';
import axios from 'axios';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/users';

export const getProfiles = () => {
    return (dispatch) => {
        dispatch({
            type: GET_PROFILES
        })
        console.log('after get Profile Dispatch')
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
export const getSingleProfile = (profile) => {
    console.log(profile)
    return (dispatch) => {
        dispatch({
            type: GET_SINGLE_PROFILE,
            payload: profile
        })
    }
}

export const showAddProfile = () => {
    console.log('show add profile fired')
    return (dispatch) => {
        dispatch({
            type: SHOW_ADD_PROFILE
        })
    }
}

export const addProfile = (profile) => {
    console.log(profile)
    return (dispatch) => {
        dispatch({
            type: ADD_PROFILE
        })
        console.log('after Dispatch')
        return axios.post(`${baseURL}`,profile)
            .then(response => {
                console.log(response)
                dispatch(getProfiles())
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: ADD_PROFILE_FAILURE
                })
            });
    }
}

export const editProfile = (profile) => {
    console.log(profile)
    return (dispatch) => {
        dispatch({
            type: ADD_PROFILE
        })
        console.log('after Dispatch')
        return axios.post(`${baseURL}`,profile)
            .then(response => {
                console.log(response)
                dispatch(getProfiles())
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: ADD_PROFILE_FAILURE
                })
            });
    }
}