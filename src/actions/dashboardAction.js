import { GET_JUMPSTART_LIST } from '../types/dashboardActionTypes';

export const getJumpstartList = () => dispatch => {
    return dispatch({
        type: GET_JUMPSTART_LIST
    })
}