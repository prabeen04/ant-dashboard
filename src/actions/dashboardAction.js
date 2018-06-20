import { GET_JUMPSTART_LIST, SET_JUMPSTART_LIST } from '../types/dashboardActionTypes';
export const getJumpstartList = () => dispatch => {
    return dispatch({
        type: GET_JUMPSTART_LIST
    })
}
export const setJumpstartList = (value, checked) => dispatch => {
    console.log(value, checked)
    // return dispatch({
    //     type: SET_JUMPSTART_LIST,
    //     payload: data
    // })
}