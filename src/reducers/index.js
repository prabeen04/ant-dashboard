import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { calendarReducer } from '../reducers/calendar_reducer';
import { profileReducer } from '../reducers/profile_reducer';
import { postReducer } from '../reducers/post_reducer';
import { authReducer } from '../reducers/auth_reducer';
import { formReducer } from "../reducers/testFormReducer";
import { formArrayReducer } from "../reducers/formArrayReducer";
import { secondArrayReducer } from '../reducers/secondArrayReducer';
import { thirdArrayReducer } from '../reducers/thirdArrayReducer';
import { dashboardReducer } from '../reducers/dashboardReducer';
import { tableReducer } from '../reducers/tableReducer';
import { googleReducer } from '../reducers/googleReducer';
import { notificationReducer } from '../reducers/notificationReducer';
import { dragReducer } from '../reducers/dragReducer';

export const rootReducer = combineReducers({
    form: FormReducer,
    dashboardReducer,
    calendarReducer,
    profileReducer,
    postReducer,
    authReducer,
    formReducer,
    formArrayReducer,
    secondArrayReducer,
    thirdArrayReducer,
    tableReducer,
    googleReducer,
    notificationReducer,
    dragReducer
})

export default rootReducer;