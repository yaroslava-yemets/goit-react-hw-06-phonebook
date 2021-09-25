import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import formReducer from './contactForm/form-reducer';

// const initialState = {
//     contactFrom: {
//         contactName: 'Yaroslava', 
//         contactNumber: '8884758599',
//     },
// };



const rootReducer = combineReducers({
    contacts: formReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
