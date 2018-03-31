import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

export const rootReducer = combineReducers({
    form: FormReducer,
})

export default rootReducer;