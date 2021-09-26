import { createAction } from '@reduxjs/toolkit'
import shortid from 'shortid';
import * as types from './form-types';

export const addContact = createAction(types.ADD, (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
}));

// export const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     }
// });
export const deleteContact = createAction(types.DELETE);

// export const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });
export const changeFilter = createAction(types.CHANGE_FILTER);

// export const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });

// export const addContactFromLocalStorage = value => ({
//     type: types.LOCAL_STORAGE,
//     payload: value,
// });