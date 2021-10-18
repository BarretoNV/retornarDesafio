import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './style.scss';
import logo from '../../img/Logo-Tractian.png';

function Header() {

    const [header, setHeader] = useState(false);

    const changeBackgroundColor = () => {
        if(window.scrollY >= 40) {
            setHeader(true);
        } else {
            setHeader(false);
        };
    };

    window.addEventListener('scroll', changeBackgroundColor);

    return (
        <header className={header ? 'header active' : 'header'}>
            <div className='logo' >

                <Link to="/"> <img src={logo} alt="Logo" /> </Link>

            </div>

            <div className='menu' >

                <ul>

                    <li> <Link to='/' > Conheça o produto </Link> </li>
                    <li> <Link to='/'> Sobre Nós </Link> </li>
                    <li> <Link to='/'> Materiais Gratuitos </Link> </li>
                    <li> <Link to='/'> Blog </Link> </li>
                    <li> <Link to='/'> Área do Cliente </Link> </li>

                </ul>

            </div>
        </header>
    )
} export default Header;