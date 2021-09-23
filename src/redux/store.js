import { createStore } from 'redux';

const initialState = {contactName: '', contactNumber: ''};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'contactForm/Change':
            return {contactName: action.value};

        default:
            return state;
    };
};

const store = createStore(reducer);

export default store;
