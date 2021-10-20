import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './style.scss';
import logo from '../../img/Logo-Tractian.png';
import {Dropdown, ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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


                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
                    <Dropdown.Menu align="end" className="super-colors">
                        <Dropdown.Item>
                            <div className="TESTE" href="#/action-1">
                                <h1>Conheça a Tractian</h1>
                                <p>Conheça mais sobre a equipe que faz acontecer o produto, nossa história e vagas abertas.</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <div className="TESTE" href="#/action-1">
                                <h1>Conheça a Tractian</h1>
                                <p>Conheça mais sobre a equipe que faz acontecer o produto, nossa história e vagas abertas.</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <div className="TESTE" href="#/action-1">
                                <h1>Conheça a Tractian</h1>
                                <p>Conheça mais sobre a equipe que faz acontecer o produto, nossa história e vagas abertas.</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <div className="TESTE" href="#/action-1">
                                <h1>Conheça a Tractian</h1>
                                <p>Conheça mais sobre a equipe que faz acontecer o produto, nossa história e vagas abertas.</p>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <div className="TESTE" href="#/action-1">
                                <h1>Conheça a Tractian</h1>
                                <p>Conheça mais sobre a equipe que faz acontecer o produto, nossa história e vagas abertas.</p>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                    <li> <Link to='/'> Blog </Link> </li>
                    <li> <Link to='/'> Área do Cliente </Link> </li>

                </ul>

            </div>
        </header>
    )
} export default Header;