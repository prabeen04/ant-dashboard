const initialState = {
    firstName: 'Paul',
    lastName: 'Pogba',
    location: 'Bhubaneswar'
}

export const formReducer = (state=initialState, action) => {
    // case "GET_STATE":
    //     return Object.assign({}, state, {location: 'London'})
    return state
}