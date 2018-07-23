import { GET_TEAMS, GET_TEAMS_SUCCESS, GET_TEAMS_FAILURE } from '../types/dragActionTypes';
const initialState = {
    teams: [
        { id: 1, Name: 'Manutd', pos: 1, stage: 'cl', meta: '' },
        { id: 2, Name: 'Chelsea', pos: 2, stage: 'cl', meta: '' },
        { id: 3, Name: 'Mancity', pos: 3, stage: 'el', meta: '' },
        { id: 4, Name: 'Arsenal', pos: 4, stage: 'el', meta: '' },
        { id: 5, Name: 'Liverpool', pos: 5, stage: 'th', meta: '' },
        { id: 6, Name: 'Tottenham', pos: 6, stage: 'th', meta: '' },
        { id: 7, Name: 'Everton', pos: 7, stage: 'bh', meta: '' },
        { id: 8, Name: 'Burnley', pos: 8, stage: 'bh', meta: '' },
        { id: 9, Name: 'West Ham', pos: 9, stage: 'rel', meta: '' },
        { id: 9, Name: 'Watford', pos: 10, stage: 'rel', meta: '' }
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