import { GET_TEAMS, GET_TEAMS_SUCCESS, GET_TEAMS_FAILURE } from '../types/dragActionTypes';
const initialState = {
    teams: [
        { id: 1, Name: 'Manutd' },
        { id: 2, Name: 'Chelsea' },
        { id: 3, Name: 'Mancity' },
        { id: 4, Name: 'Arsenal' },
        { id: 5, Name: 'Liverpool' },
        { id: 6, Name: 'Tottenham' },
        { id: 7, Name: 'Everton' },
        { id: 8, Name: 'Burnley' },
        { id: 9, Name: 'West Ham' },
      ]
}

export const dragReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEAMS:
            return state
        default:
            return state;
    }
    return state;
}