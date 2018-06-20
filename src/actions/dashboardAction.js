import { GET_JUMPSTART_LIST, SET_JUMPSTART_LIST } from '../types/dashboardActionTypes';
export const getJumpstartList = () => dispatch => {
    return dispatch({
        type: GET_JUMPSTART_LIST
    })
}
export const setJumpstartList = () => dispatch => {
    return dispatch({
        type: SET_JUMPSTART_LIST
    })
}