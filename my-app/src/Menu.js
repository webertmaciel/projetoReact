import React from 'react';
import './App'
function Menu(props) {

    const linstLinks = props.links.map((link, index) => <li key={index}>{link}</li>);


    return (
        <ul className="menu">{linstLinks}</ul>)
}
export default Menu;