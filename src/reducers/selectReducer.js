import { OPTION_CHANGE, NEW_OPTION_CREATE, NEW_OPTION_CREATE_SUCCESS, NEW_OPTION_CREATE_FAILURE } from "../types/selectActionTypes";

const initialState = {
    isLoading: false,
    currentValue: { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    colourOptions: [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
        { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630' },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ]
}
export const selectReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPTION_CHANGE:
            return { ...state, currentValue: action.payload }
        case NEW_OPTION_CREATE:
            return { ...state, isLoading: true }
        case NEW_OPTION_CREATE_SUCCESS:
            return { ...state, isLoading: false, currentValue: action.payload,  colourOptions: [...state.colourOptions, action.payload] }
        case NEW_OPTION_CREATE_FAILURE:
            return { ...state, currentValue: action.payload }
        default:
            return state;

    }
    return state;
}