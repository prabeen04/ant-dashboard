const initialState = {
}

export const thirdArrayReducer = (state = initialState, action) => {
    switch (action.types) {
        case GET_PRODUCTS:
            return state;
        default:
            return state;
    }

    return state;
}