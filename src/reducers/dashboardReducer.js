import { GET_JUMPSTART_LIST, SET_JUMPSTART_LIST, OPEN_JUMPSTART_MODAL, CLOSE_JUMPSTART_MODAL } from '../types/dashboardActionTypes';
const initialState = {
    isModalOpen: false,
    jumpstartData: {},
    dateRangeList: [
        { id: 1, value: '1W' },
        { id: 2, value: '4W' },
        { id: 3, value: '1Y' },
        { id: 4, value: 'MTD' },
        { id: 5, value: 'QTD' },
        { id: 6, value: 'YTD' },
        { id: 7, value: 'ALL' },
    ],
    jumpStartList: [
        {
            visible: true,
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
            visible: true,
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
        {
            visible: true,
            id: 6,
            title: ' Title 6',
            value: 7700
        },
        {
            visible: true,
            id: 7,
            title: ' Title 7',
            value: 87588.00
        },
        {
            visible: true,
            id: 8,
            title: ' Title 8',
            value: 111144.00
        }
    ]
}
export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JUMPSTART_LIST:
            return state;

        case SET_JUMPSTART_LIST:
            return {
                ...state, jumpStartList: [...state.jumpStartList.map(data => {
                   return data.id === action.payload.id ? action.payload : data
                }
                )]
            };

        case OPEN_JUMPSTART_MODAL:
            return { ...state, isModalOpen: true, jumpstartData: action.payload };

        case CLOSE_JUMPSTART_MODAL:
            return { ...state, isModalOpen: false }

        default:
            return state;
    }
    return state;
}