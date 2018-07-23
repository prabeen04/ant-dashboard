import { DRAG_TEAM } from '../types/dragActionTypes';

export const dragTeam = (team, stage) => dispatch => {
    console.log(team, stage)
    const newTeam = Object.assign({}, team, { stage: stage })
    return dispatch({
        type: DRAG_TEAM,
        payload: newTeam
    })
}