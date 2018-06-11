import { GET_JUMPSTART_LIST } from '../types/dashboardActionTypes';
const initialState = [

]

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JUMPSTART_LIST:
            return state;
        default:
            return state;
    }
    return state;
}