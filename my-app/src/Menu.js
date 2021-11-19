import React from 'react';
import './App'
function Menu(props) {
    return (
        <ul className="menu">
            {props.links.map(link => {
                return (<li key={link}>{link}</li>)
            })}
        </ul>)
}
export default Menu;