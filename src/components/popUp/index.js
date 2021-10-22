import { React, useState } from 'react';

import './style.scss';

import OneMinuteAlert from '../../img/oneMinuteAlert.png'

function Popup() {

    const [displayPopup, setDisplayPopup] = useState('flex');

    function closePopup() {

        setDisplayPopup('none');

    }

    return (

        <div style={{ display: displayPopup }} className="screenWrapper">

            <div className="popup">

                <div className="infoPopup">

                    <img draggable="false" src={OneMinuteAlert} alt=""/>

                    <div className="popUpText">

                        <h1>Veja como funciona a solução Tractian em apenas 1 minuto</h1>
                        <button id="glowOnHover" type="button">Assistir demonstração</button>


                    </div>

                </div>

                <div onClick={closePopup} className="closeButton">X</div>

            </div>

        </div>

    )
}

export default Popup;