import React from 'react';
import './styles/button.css';

const Button = ({name, class_name, id}) => {

    return (
        <button className={class_name} id = {id}>{name}</button>
    );
}


export default Button;