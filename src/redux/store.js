import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import formReducer from './contactForm/form-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        contacts: formReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
