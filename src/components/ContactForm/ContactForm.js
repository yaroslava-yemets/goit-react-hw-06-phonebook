import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import shortid from 'shortid';
import s from './ContactForm.module.css';

function ContactForm ({ onSubmit, name, number, onReset, onHandleChangeName, onHandleChangeNumber }) {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');

    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

    // const handleChange = (evt) => {
    //     const { value, name } = evt.currentTarget;
    //     if(name === 'name') {
    //         console.log('change name');
    //         onHandleChangeName(value);
    //     } if (name === 'number') {
    //         console.log('change number');
    //         onHandleChangeNumber(value);
    //     }
    // };

    const handleChangeName = (evt) => {
        const { value } = evt.currentTarget;
                    console.log('change name');
                    console.log(value);
                    onHandleChangeName(value);
    };

    const handleChangeNumber = (evt) => {
        const { value } = evt.currentTarget;
                    console.log('change number');
                    console.log(value);
                    onHandleChangeNumber(value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(name, number);
        onSubmit(name, number);
        onReset();
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label} htmlFor={nameInputId}>Name</label>
            <input
                className={s.input}
                value={name}
                type="text"
                name="name"
                id={nameInputId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={handleChangeName}
            />

            <label className={s.label} htmlFor={numberInputId}>Number</label>
            <input
                className={s.input} 
                value={number}
                type="tel"
                name="number"
                id={numberInputId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={handleChangeNumber}
            />
                
            <button
            className={s.button}
                 type="submit"
            >
                Add contact
            </button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        name: state.contactName,
        number: state.contactNumber,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onReset: () => dispatch(actions.reset()),
        onHandleChangeName: (value) => dispatch(actions.handleChangeName(value)),
        onHandleChangeNumber: (value) => dispatch(actions.handleChangeNumber(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);