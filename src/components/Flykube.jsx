import React, { useState, useEffect } from 'react';

import handleSubmit from '../functions/handleSubmitButton';
import inputBackgroundColor from '../functions/inputBackground';

import './flykubeStyles.css';
import logo from '../images/logo.png';

const FlykubeComponent = () => {

    useEffect(() => {
        console.log("Componente cargado correctamente...");
    }, []);

    const [able, setAble] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [active, setActive] = useState("Active");
    const [inactive, setInactive] = useState("Inactive");
    
    const handleClick = () => {

        if (able && !disabled) {
            setAble(false); 
            setDisabled(true); 
            setActive("Inactive");
            setInactive("Active");
        } else {
            setAble(true);
            setDisabled(false);
            setActive("Active");
            setInactive("Inactive");
        }      
    }

    return (
        <div className='app__body'>
            <section className='header__container'>
                <div className='button__container-left'>
                    <button 
                        onClick={handleClick}
                        className={able ? 'button__left' : 'button__right'} 
                    >
                    {active}
                    </button>
                </div>
                <div>
                    <button 
                        className={!disabled ? 'button__right' : 'button__left'}
                        onClick={handleClick}
                    >
                    {inactive}
                    </button>
                </div>
            </section>
            
            <section className='main__container'>
                <img className='react-logo' src={logo} alt="react-logo" />
                <form 
                    className='form__container' 
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text" 
                        id='inputbox'
                        onChange={inputBackgroundColor}
                    >
                    </input>
                    <button 
                        className='button__send'
                        type='submit'>
                    ENVIAR
                    </button>
                </form>
            </section>
            
        </div>
    )
}

export default FlykubeComponent;