import { 
    GET_PROFILES, GET_PROFILES_SUCCESS, GET_PROFILES_FAILURE, 
    GET_SINGLE_PROFILE, GET_SINGLE_PROFILE_SUCCESS, GET_SINGLE_PROFILE_FAILURE, 
    SHOW_ADD_PROFILE, ADD_PROFILE, ADD_PROFILE_SUCCESS, ADD_PROFILE_FAILURE } from '../types/profile_actiontypes';
const initialState = {
    isLoading: false,
    isError: false,
    profiles: [],
    singleProfile: {},
    showAddProfile: false,
    showEditProfile: false,
    showViewProfile: false,
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILES:
            return Object.assign({}, state, { isLoading: true })
        case GET_PROFILES_SUCCESS:
            return Object.assign({}, state, { isLoading: false, profiles: action.payload })
        case GET_PROFILES_FAILURE:
            return Object.assign({}, state, { isLoading: false, isError: true })
// @get single Profile
        case GET_SINGLE_PROFILE:
            return Object.assign({}, state, { singleProfile: action.payload, showViewProfile: true, showAddProfile: false, showEditProfile: false })
        case GET_SINGLE_PROFILE_SUCCESS:
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