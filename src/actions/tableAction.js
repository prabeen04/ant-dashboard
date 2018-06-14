import { GET_TABLE_DATA } from "../types/tableActionTypes";

export const getTableData = dispatch => {
    return dispatch({
        type: GET_TABLE_DATA
    })
}