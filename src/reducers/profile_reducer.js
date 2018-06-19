import {
    GET_PROFILES, GET_PROFILES_SUCCESS, GET_PROFILES_FAILURE,
    GET_SINGLE_PROFILE, GET_SINGLE_PROFILE_SUCCESS, GET_SINGLE_PROFILE_FAILURE,
    SHOW_ADD_PROFILE, ADD_PROFILE, ADD_PROFILE_SUCCESS, ADD_PROFILE_FAILURE,
    OPEN_EDIT_PROFILE, EDIT_PROFILE, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE,
    SET_FILTER_TEXT, SET_VIEW_TYPE, SET_SORT_KEY
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
    filterText: '',
    sortKey: 'ASC'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        // @get All Profile
        case GET_PROFILES:
            return { ...state, isLoading: true, showViewProfile: false, showAddProfile: false, showEditProfile: false }
        case GET_PROFILES_SUCCESS:
            return { ...state, isLoading: false, profiles: action.payload }
        case GET_PROFILES_FAILURE:
            return { ...state, isLoading: false, isError: true }

        // @get single Profile
        case GET_SINGLE_PROFILE:
            return { ...state, singleProfile: action.payload, showViewProfile: true, showAddProfile: false, showEditProfile: false }
        case SHOW_ADD_PROFILE:
            return { ...state, showViewProfile: false, singleProfile:{}, showAddProfile: true, showEditProfile: false }

        // add PROFILE section
        case ADD_PROFILE:
            return { ...state, isLoading: true }
        case ADD_PROFILE_SUCCESS:
            return { ...state, isLoading: false }
        case ADD_PROFILE_FAILURE:
            return { ...state, isLoading: false, isError: true }

        // EDIT PROFILE section
        case OPEN_EDIT_PROFILE:
            return { ...state, singleProfile: action.payload, showViewProfile: false, showAddProfile: false, showEditProfile: true, isSubmitting: false }
        case EDIT_PROFILE:
            return { ...state, isLoading: true, isSubmitting: true }
        case EDIT_PROFILE_SUCCESS:
            return { ...state, isLoading: false, showEditProfile: false, isSubmitting: false }
        case EDIT_PROFILE_FAILURE:
            return { ...state, showEditProfile: false, isLoading: false, isError: true, isSubmitting: false, }
        case SET_FILTER_TEXT:
            return { ...state, filterText: action.payload, singleProfile:{}, showViewProfile: false, showAddProfile: false, showEditProfile: false }
        case SET_VIEW_TYPE:
            return { ...state, viewType: action.payload }
        case SET_SORT_KEY:
            return { ...state, sortKey: action.payload}
        default:
            return state
    }
    return state;
}