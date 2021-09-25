import { combineReducers } from 'redux';
import * as types from './form-types';

// {
//     contacts: {
//       items: [],
//       filter: ''
//     }
// }


const items = (state = [], {type, payload}) => {
    switch(type) {
        case types.ADD:
            return [...state, payload];

        // case types.LOCAL_STORAGE:
        //     return payload;
        
        case types.DELETE:
            return state.filter(contact => contact.id !== payload);

        default:
            return state;

    }
};

const filter = (state = '', {type, payload}) => {
    switch(type) {
        case types.CHANGE_FILTER:
            return payload;

        default:
            return state;

    }
};
  
export default combineReducers({
  items,
  filter  
});
