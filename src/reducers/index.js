import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { calendarReducer } from '../reducers/calendar_reducer';
import { profileReducer } from '../reducers/profile_reducer';

export const rootReducer = combineReducers({
    form: FormReducer,
    calendarReducer,
    profileReducer
})

export default rootReducer;