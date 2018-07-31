import {
    OPTION_CHANGE, NEW_OPTION_CREATE, NEW_OPTION_CREATE_SUCCESS, NEW_OPTION_CREATE_FAILURE,
    OPEN_FORM_MODAL, CLOSE_FORM_MODAL
} from "../types/selectActionTypes";

const initialState = {
    isLoading: false,
    isFormModalOpen: false,
    newCreatedValue: '',
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
        case OPEN_FORM_MODAL:
            return { ...state, newCreatedValue: action.payload, isFormModalOpen: true }
        case CLOSE_FORM_MODAL:
            return { ...state, isFormModalOpen: false }
        case NEW_OPTION_CREATE:
            return { ...state, isFormModalOpen: false, currentValue: action.payload, colourOptions: [...state.colourOptions, action.payload] }
        case NEW_OPTION_CREATE_SUCCESS:
            return { ...state, isLoading: false, isFormModalOpen: false, currentValue: action.payload, colourOptions: [...state.colourOptions, action.payload] }
        case NEW_OPTION_CREATE_FAILURE:
            return { ...state, currentValue: action.payload }
        case OPEN_FORM_MODAL:
            return { ...state, isFormModalOpen: true }
        default:
            return state;

    }
    return state;
}