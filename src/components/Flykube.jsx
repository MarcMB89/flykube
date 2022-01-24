import React from 'react';
import './flykubeStyles.css';
import logo from './logo.svg';

const FlykubeComponent = () => {
    return (
        <div>
            <section className='header__container'>
                <button className='button__active'>Active</button>
                <button className='button__inactive'>Inactive</button>
            </section>
            <section className='main__container'>
                <img src={logo} alt="react-logo" />
            </section>
            <section className='input__container'>
            <input></input>
            <button className='button__send'>Enviar</button>
            </section>
        </div>
    )
}

export default FlykubeComponent;