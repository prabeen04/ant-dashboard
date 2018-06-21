import { GET_JUMPSTART_LIST, SET_JUMPSTART_LIST } from '../types/dashboardActionTypes';
export const getJumpstartList = () => dispatch => {
    return dispatch({
        type: GET_JUMPSTART_LIST
    })
}
export const setJumpstartList = (data) => dispatch => {
    console.log(data)
    return dispatch({
        type: SET_JUMPSTART_LIST,
        payload: {visible: true, id: 1, title: "Title 1", value: 10340}

    })
}