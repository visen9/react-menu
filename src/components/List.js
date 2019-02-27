import React from 'react';
import { NavLink } from 'react-router-dom';

const List = ({ items, addEventHandler, removeEventHandler }) => (
    <ul>{items.map((el) =>
        <li key={el.id}>
            <NavLink to={`/${el.id}`}>
                {el.title}
            </NavLink>
            <button onClick={() => removeEventHandler(el.id)}>-</button>
            <button onClick={() => addEventHandler(el.id)} >+</button>
        </li>)}
    </ul>
)

export default List;