import { GET_JUMPSTART_LIST } from '../types/dashboardActionTypes';
const initialState = {
    jumpstartData: [
        {
            visible: false,
            id: 1,
            title: 'Title 1',
            value: 100
        },
        {
            visible: true,
            id: 2,
            title: 'Title 2',
            value: 4500
        },
        {
            visible: true,
            id: 3,
            title: 'Title 3',
            value: 90
        },
        {
            visible: false,
            id: 4,
            title: 'Title 4',
            value: 45
        },
        {
            visible: true,
            id: 5,
            title: ' Title 5',
            value: 1100
        },
    ]
    
} 
export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JUMPSTART_LIST:
            return state;
        default:
            return state;
    }
    return state;
}