import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss';

function Footer() {

    return (
        <footer >

            <div className='menu' >

                <ul>

                    <li> <Link to='/' > Conheça o produto </Link> </li>
                    <li> <Link to='/'> Sobre Nós </Link> </li>
                    <li> <Link to='/'> Materiais Gratuitos </Link> </li>
                    <li> <Link to='/'> Blog </Link> </li>
                    <li> <Link to='/'> Área do Cliente </Link> </li>

                </ul>

            </div>
        </footer>
    )
} export default Footer;