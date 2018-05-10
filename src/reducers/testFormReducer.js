const initialState = {
    firstName: 'Paul',
    lastName: 'Pogba',
    location: 'Bhubaneswar',
    street: '',
    city: 'lucy',
}

export const formReducer = (state=initialState, action) => {
    // case "GET_STATE":
    //     return Object.assign({}, state, {location: 'London'})
    return state
}