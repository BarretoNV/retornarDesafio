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
                        <Dropdown.Toggle id="dropdown-custom-1">Conheça o Produto</Dropdown.Toggle>
                        <Dropdown.Menu align="end" className="super-colors">
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Sensor Tractian</h1>
                                    <p>Análise de Vibração e Temperatura em tempo real.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Plataforma</h1>
                                    <p>Monitore a condição das suas máquinas de qualquer lugar.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Funcionalidades</h1>
                                    <p>Saúde do Ativo, Ordens de Serviço, Insights Automáticos e muito mais.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Planos</h1>
                                    <p>Saiba como obter nossa solução.</p>
                                </div>
                            </Dropdown.Item>                          
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Agende uma Demonstração</h1>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle id="dropdown-custom-1">Sobre Nós</Dropdown.Toggle>
                        <Dropdown.Menu align="end" className="super-colors">
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Conheça a Tractian</h1>
                                    <p>Conheça mais sobre a equipe que faz acontecer o produto, nossa história e vagas abertas.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Histórias de Sucesso</h1>
                                    <p>Saiba como nossa solução melhora o dia a dia dos profissionais da manutenção.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Contato</h1>
                                    <p>Entre em contato para tirar dúvidas, conhecer de perto nossa solução e enviar sugestões.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Trabalhe Conosco</h1>
                                    <p>Venha participar da Startup para Indústria mais promissora do Brasil.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Imprensa</h1>
                                    <p>Veja o que os principais veículos de informação falam sobre a Tractian.</p>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle id="dropdown-custom-1">Materiais Gratuitos</Dropdown.Toggle>
                        <Dropdown.Menu align="end" className="super-colors">
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Guias</h1>
                                    <p>Obtenha os melhores guias para manutenção gratuitamente.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Checklists</h1>
                                    <p>Baixe nossos checklists gratuitos e evite problemas no seu time de manutenção.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Calculadora ROI</h1>
                                    <p>Qual o peso da sua máquina no seu bolso? Veja se vale a pena trocar para a solução da Tractian.</p>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <h2>ÚLTIMOS MATERIAIS</h2>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Em busca do downtime zero.</h1>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h1>Guia Completo Indicadores da Manutenção.</h1>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="TESTE" href="#/action-1">
                                    <h3>Ver todos</h3>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <li> <Link to='/'> Blog </Link> </li>
                    <li> <Link to='/'> Área do Cliente </Link> </li>

                    <button id="glowOnHover" type="button">Demonstração</button>


                </ul>

            </div>
        </header>
    )
} export default Header;