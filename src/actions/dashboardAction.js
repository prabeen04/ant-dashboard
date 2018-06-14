import { GET_JUMPSTART_LIST } from '../types/dashboardActionTypes';

export const getjumpstartList = () => dispatch => {
    return dispatch({
        type: GET_JUMPSTART_LIST
    })
}