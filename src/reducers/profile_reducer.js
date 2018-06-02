import {
    GET_PROFILES, GET_PROFILES_SUCCESS, GET_PROFILES_FAILURE,
    GET_SINGLE_PROFILE, GET_SINGLE_PROFILE_SUCCESS, GET_SINGLE_PROFILE_FAILURE,
    SHOW_ADD_PROFILE, ADD_PROFILE, ADD_PROFILE_SUCCESS, ADD_PROFILE_FAILURE,
    OPEN_EDIT_PROFILE, EDIT_PROFILE, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE,
    SET_FILTER_TEXT, SET_VIEW_TYPE
} from '../types/profile_actiontypes';
const initialState = {
    isLoading: false,
    isError: false,
    isSubmitting: false,
    profiles: [],
    singleProfile: {},
    showAddProfile: false,
    showEditProfile: false,
    showViewProfile: false,
    viewType: 'GRID',
    visibilityFilter: 'ALL',
    filterText: ''
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILES:
            return Object.assign({}, state, { isLoading: true,showViewProfile: false, showAddProfile: false, showEditProfile: false })
        case GET_PROFILES_SUCCESS:
            return Object.assign({}, state, { isLoading: false, profiles: action.payload })
        case GET_PROFILES_FAILURE:
            return Object.assign({}, state, { isLoading: false, isError: true })
        // @get single Profile
        case GET_SINGLE_PROFILE:
            return Object.assign({}, state, { singleProfile: action.payload, showViewProfile: true, showAddProfile: false, showEditProfile: false })
        case GET_SINGLE_PROFILE_SUCCESS:
        case SHOW_ADD_PROFILE:
            return Object.assign({}, state, {
                showViewProfile: false, showAddProfile: true, showEditProfile: false
            })
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
        // EDIT PROFILE section
        case OPEN_EDIT_PROFILE:
            return Object.assign({}, state, {
                singleProfile: action.payload, showViewProfile: false, showAddProfile: false, showEditProfile: true,isSubmitting: false,
            })
        case EDIT_PROFILE:
            return Object.assign({}, state, {
                isLoading: true,  isSubmitting: true
            })
        case EDIT_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,showEditProfile: false, isSubmitting: false,
            })
        case EDIT_PROFILE_FAILURE:
            return Object.assign({}, state, {
                showEditProfile: false,
                isLoading: false,
                isError: true,
                isSubmitting: false,
            })
        case SET_FILTER_TEXT:
            return Object.assign({}, state, { filterText: action.payload })
        case SET_VIEW_TYPE:
            return Object.assign({}, state, { viewType: action.payload })
        default:
            return state
    }
    return state;
}