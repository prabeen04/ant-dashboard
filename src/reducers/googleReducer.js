import { SET_GOOGLE_ADDRESS, GET_GOOGLE_ADDRESS } from '../types/googleActionTypes';

const initialState = {
    address: ''
}

export const googleReducer = (state=initialState, action) =>{
    switch(action.type){
        case SET_GOOGLE_ADDRESS:
            return {...state, address: action.payload}
    }
    return state
}