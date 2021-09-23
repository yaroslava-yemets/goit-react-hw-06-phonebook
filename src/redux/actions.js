export const handleChange = value => ({
    type: 'contactForm/Change',
    payload: value,
});

export const reset = (value) => ({
    type: 'contactForm/Reset',
    payload: value,
});