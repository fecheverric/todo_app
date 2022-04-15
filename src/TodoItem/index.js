import React from "react";
import './TodoItem.css';
import { MdCheckCircle } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >
            <MdCheckCircle />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >
            <MdClose />
            </span>
        </li>
    );
}

export { TodoItem };