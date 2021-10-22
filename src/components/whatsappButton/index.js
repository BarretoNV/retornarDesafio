import React from 'react';

import WhatsApp from '../../img/whatsappIcon.png'

import './style.scss';

function WhatsappButton() {
    return (
        <div className="teste">
            <a href="https://api.whatsapp.com/send?phone=+55TELEFONE&text=Olá!%20Como%20podemos%20te%20ajudar?" target="_blank" rel="noreferrer"> <img src={WhatsApp} alt="" /> </a>
        </div>
    )
}

export default WhatsappButton;