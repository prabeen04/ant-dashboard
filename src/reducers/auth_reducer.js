const initialState = {
    isAuthenticated: false
}
export const AuthReducer = (state=initialState, action) =>{
    switch(action.type){
        default:
            return Object.assign({}, state, {isAuthenticated: false})
    }

    return state;
}