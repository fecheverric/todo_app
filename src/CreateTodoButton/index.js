import React from 'react';
import './CreateTodoButton.css';
import { TiPlus } from 'react-icons/ti';


function CreateTodoButton({ setOpenModal, openModal }) {
    const onClickButton = () => {
    if (openModal) {
        setOpenModal(false);
    } else {
        setOpenModal(true);
    }
    };

    return (
    <button className="CreateTodoButton" onClick={() => onClickButton()}>
        <TiPlus />
    </button>
    );
}

export { CreateTodoButton };

