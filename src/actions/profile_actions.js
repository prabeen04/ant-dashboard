import {
    GET_PROFILES, GET_PROFILES_SUCCESS, GET_PROFILES_FAILURE,
    GET_SINGLE_PROFILE, GET_SINGLE_PROFILE_SUCCESS, GET_SINGLE_PROFILE_FAILURE,
    SHOW_ADD_PROFILE, ADD_PROFILE, ADD_PROFILE_SUCCESS, ADD_PROFILE_FAILURE,
    OPEN_EDIT_PROFILE, EDIT_PROFILE, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE,
    SET_FILTER_TEXT,SET_VIEW_TYPE, SET_SORT_KEY
} from '../types/profile_actiontypes';

import axios from 'axios';

const baseURL = 'https://murmuring-hamlet-22423.herokuapp.com/api/users';

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
        return axios.post(`${baseURL}`, profile)
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

export const openEditProfile = (profile) => {
    console.log(profile)
    return (dispatch) => {
        dispatch({
            type: OPEN_EDIT_PROFILE,
            payload: profile
        })
    }
}
export const updateProfile = (profile) => {
    console.log(profile)
    return (dispatch) => {
        dispatch({
            type: EDIT_PROFILE,
        })
        return axios.put(`${baseURL}/${profile._id}`, profile)
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
export const setFilterText = (filterText) => {
    return (dispatch) => {
        dispatch({
            type: SET_FILTER_TEXT,
            payload: filterText
        })
    }
}
export const setViewType = (viewType) => {
    return (dispatch) => {
        dispatch({
            type: SET_VIEW_TYPE,
            payload: viewType
        })
    }
}
export const setSortKey = (key) => {
    return (dispatch) => {
        dispatch({
            type: SET_SORT_KEY,
            payload: key
        })
    }
}