import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    contactName: 'Yaroslava', 
    contactNumber: '8884758599',
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'contactForm/ChangeName': 
            return {
                ...state,
                contactName: action.value,
            }

        case 'contactForm/ChangeNumber': 
            return {
                ...state,
                contactNumber: action.value,
            }
            
           
            // if(action.payload.name === 'name') {
            //     return {
            //         contactName: action.payload.value
            //     }
            // } if (action.payload.name === 'number') {
            //     return {
            //         contactName: action.payload.value
            //     }
            // }                 

        case 'contactForm/Reset':
            return {
                contactName: '',
                contactNumber: '',
            };

        default:
            return state;
    };
};

const store = createStore(reducer, composeWithDevTools());

export default store;
