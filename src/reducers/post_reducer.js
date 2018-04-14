import {
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    VIEW_POST, VIEW_POST_SUCCESS, VIEW_POST_FAILURE, GET_SINGLE_POST
} from '../types/post_actiontypes';

const initialState = {
    isLoading: false,
    isError: false,
    posts: [],
    singlePost: {}
}

export const postReducer = (state=initialState, action) => {
    switch(action.type ){
        case GET_POSTS:
            return Object.assign({}, state,{ isLoading: true})
        case GET_POSTS_SUCCESS:
            return Object.assign({}, state, {isLoading: false, posts: action.payload})
        case GET_POSTS_FAILURE:
            return Object.assign({}, state, {isLoading: false, isError: true})  
    // get single post
        case GET_SINGLE_POST:
            return Object.assign({}, state,{ singlePost: action.payload })
        default:
            return state          
    }
    return state;
}