import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import { FaTasks } from 'react-icons/fa';


function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='form-icon'>
                <h1><FaTasks /></h1>
            </div>
            <label>Escribe tus cosas por hacer</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Tarea para hoy...'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                type='button'
                className='TodoForm-button TodoForm-button--cancel'
                onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                type='submit'
                className='TodoForm-button TodoForm-button--add'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };