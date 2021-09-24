export const handleChangeName = value => ({
    type: 'contactForm/ChangeNumber',
    payload: value,
});

export const handleChangeNumber = value => ({
    type: 'contactForm/ChangeName',
    payload: value,
});

export const reset = () => ({
    type: 'contactForm/Reset',
    // payload: value,
});