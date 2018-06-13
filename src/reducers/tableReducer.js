import { GET_TABLE_DATA } from '../types/tableActionTypes';
const initialState = []
export const tableReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_TABLE_DATA:
            return state;
    }
    return state;
}