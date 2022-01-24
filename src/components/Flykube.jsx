import React from 'react';
import './flykubeStyles.css';
import logo from './logo.png';

const FlykubeComponent = () => {
    return (
        <div className='app__body'>
            <section className='header__container'>
                <div className='button__container-active'>
                    <button className='button__active'>Active</button>
                </div>
                <div className='button__container-inactive'>
                <button className='button__inactive'>Inactive</button>
                </div>
            </section>
            
            <section className='main__container'>
                <img src={logo} alt="react-logo" />

                <section className='input__container'>
                    <input></input>
                    <button className='button__send'>ENVIAR</button>
                </section>
            </section>
            
        </div>
    )
}

export default FlykubeComponent;