import { GET_PROFILES, GET_PROFILES_SUCCESS, GET_PROFILES_FAILURE, ADD_PROFILE, ADD_PROFILE_SUCCESS, ADD_PROFILE_FAILURE } from '../types/profile_actiontypes';
const initialState ={
    isLoading: false,
    isError: false,
    profiles: []
}
export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PROFILES:
            return Object.assign({}, state, {isLoading: true})
        case GET_PROFILES_SUCCESS:
            return Object.assign({}, state, {isLoading: false})
        case GET_PROFILES_FAILURE:
            return Object.assign({}, state, {isLoading: false, isError: true})
        // add PROFILE section
        case ADD_PROFILE:
            return Object.assign({}, state, {
                isLoading: true
            })
        case ADD_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false
            })
        case ADD_PROFILE_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isError: true
            })    
        default:
            return state    
    }
    return state;
}