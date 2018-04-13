import {
GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
 VIEW_POST, VIEW_POST_SUCCESS, VIEW_POST_FAILURE
} from '../types/post_actiontypes';
import axios from 'axios';

const baseURL = 'https://prabeen-restapi.herokuapp.com/api/posts';

export const getPosts = (dispatch) => {

    return (dispatch) => {
        dispatch({
            type: GET_POSTS
        })

    return axios.get(`${baseURL}`)    
    }
}