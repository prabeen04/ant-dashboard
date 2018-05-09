import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { calendarReducer } from '../reducers/calendar_reducer';
import { profileReducer } from '../reducers/profile_reducer';
import { postReducer } from '../reducers/post_reducer';
import { authReducer } from '../reducers/auth_reducer';
import { formReducer } from "../reducers/testFormReducer";

export const rootReducer = combineReducers({
    form: FormReducer,
    calendarReducer,
    profileReducer,
    postReducer,
    authReducer,
    formReducer
})

export default rootReducer;