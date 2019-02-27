import React from 'react';
import { NavLink } from 'react-router-dom';

const Modal = ({ idMenu }) => (
    <>
        <h1>Modal {idMenu}</h1>
        <NavLink to="/" >X</NavLink>
    </>
)

export default Modal;