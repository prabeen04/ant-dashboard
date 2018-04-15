import {
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    VIEW_POST, VIEW_POST_SUCCESS, VIEW_POST_FAILURE, GET_SINGLE_POST
} from '../types/post_actiontypes';
import axios from 'axios';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/posts';

export const getPosts = (dispatch) => {

    return (dispatch) => {
        dispatch({
            type: GET_POSTS
        })

        return axios.get(`${baseURL}`)
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: GET_POSTS_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_POSTS_FAILURE,
                })
            })
    }
}

export const getSinglePost = (post) =>{
    return (dispatch) => {
        dispatch({
            type: GET_SINGLE_POST,
            payload: post
        })
    }
}

export const addPost = (post) => {
    return (dispatch) => {
        dispatch({
            type: ADD_POST
        })
    return axios.post(`${baseURL}`, post)
        .then(response => {
            dispatch(getPosts())
        })
        .catch((error) => {
            dispatch({
                type: GET_POSTS_FAILURE
            })
        })    
    }
}