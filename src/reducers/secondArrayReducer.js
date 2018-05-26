import { GET_PRODUCTS } from '../types/secondArrayActionTypes';
const initialState = [{
    team: 'manutd',
    captain: 'valencia',
    trophy: 50
},
{
    team: 'arsenal',
    captain: 'wilshere',
    trophy: 15
},
{
    team: 'chelsea',
    captain: 'cahil',
    trophy: 10
}]

export const secondArrayReducer = (state = initialState, action) => {
    switch (action.types) {
        case GET_PRODUCTS:
            return [...state]
        default:
            return [...state]
    }

    return state;
}