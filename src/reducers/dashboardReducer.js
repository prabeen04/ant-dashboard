import { GET_JUMPSTART_LIST, SET_JUMPSTART_LIST, OPEN_JUMPSTART_MODAL, CLOSE_JUMPSTART_MODAL, SORT_JUMPSTART_BOX } from '../types/dashboardActionTypes';
const update = require('immutability-helper')

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
            value: 100,
            progress: 45
        },
        {
            visible: true,
            id: 2,
            title: 'Title 2',
            value: 4500,
            progress: -33
        },
        {
            visible: true,
            id: 3,
            title: 'Title 3',
            value: 90,
            progress: 90
        },
        {
            visible: true,
            id: 4,
            title: 'Title 4',
            value: 45,
            progress: -20
        },
        {
            visible: true,
            id: 5,
            title: ' Title 5',
            value: 1100,
            progress: 6
        },
        {
            visible: false,
            id: 6,
            title: ' Title 6',
            value: 7700,
            progress: -15
        },
        {
            visible: false,
            id: 7,
            title: ' Title 7',
            value: 87588.00,
            progress: 11
        },
        {
            visible: true,
            id: 8,
            title: ' Title 8',
            value: 111144.00,
            progress: -4
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
        case SORT_JUMPSTART_BOX:
            return  update(state, {
                jumpStartList: {
                  $splice: [[action.payload, 1], [action.payload2, 0, jumpStartList[action.payload]]],
                },
              });   

        default:
            return state;
    }
    return state;
}