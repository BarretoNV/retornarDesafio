import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss';

//imagens
import Investidor1 from '../../img/investidor1.png';
import Investidor2 from '../../img/investidor2.png';
import Investidor3 from '../../img/investidor3.png';
import Premio1 from '../../img/premio1.png';
import Premio2 from '../../img/premio2.png';
import Linkedin from '../../img/linkedin.png';
import Facebook from '../../img/facebook.png';
import Instagram from '../../img/instagram.png';
import Youtube from '../../img/youtube.png';



function Footer() {

    return (
        <footer >

            <div className='menu' >

                <ul className='footerList'>

                    <h1>SOBRE A TRACTIAN</h1>

                    <li> <Link to='/' > Trabalhe conosco </Link> </li>
                    <li> <Link to='/'> Conheça a Tractian </Link> </li>
                    <li> <Link to='/'> Histórias de Sucesso </Link> </li>
                    <li> <Link to='/'> Imprensa </Link> </li>
                    <li> <Link to='/'> Política de Privacidade </Link> </li>

                </ul>

                <ul className='footerList'>

                    <h1>PRODUTO</h1>

                    <li> <Link to='/' > O Sensor Tractian </Link> </li>
                    <li> <Link to='/'> Plataforma </Link> </li>
                    <li> <Link to='/'> Funcionalidades </Link> </li>
                    <li> <Link to='/'> Planos </Link> </li>

                </ul>

                <ul className='footerList'>

                    <h1>MATERIAIS</h1>

                    <li> <Link to='/' > Guias e Ebooks </Link> </li>
                    <li> <Link to='/'> Checklists </Link> </li>
                    <li> <Link to='/'> Calculadora </Link> </li>
                    <li> <Link to='/'> Intensivão </Link> </li>

                </ul>

                
                <ul className="footerList">

                    <h1>FALE CONOSCO</h1>

                    <li> <Link to='/' > Trabalhe conosco </Link> </li>
                    <li> <Link to='/'> Fale com o CEO </Link> </li>  

                </ul>

            </div>

            <div className='menuImages' >

                <ul className='footerImages'>

                    <h1>NOSSOS INVESTIDORES</h1>

                    <div className="investors">
                        <img draggable="false" src={Investidor1} alt=""/>
                        <img draggable="false" src={Investidor2} alt=""/>
                        <img draggable="false" src={Investidor3} alt=""/>
                    </div>

                </ul>

                <ul className='footerImages'>

                <h1>RECONHECIMENTO</h1>

                    <div className="rewards">
                        <img draggable="false" src={Premio1} alt=""/>
                        <img draggable="false" src={Premio2} alt=""/>
                    </div>

                </ul>

                <ul className='footerImages'>

                    <h1>CONECTE-SE CONOSCO</h1>
                    
                    <div className="socialMedias">
                        <Link to='https://www.linkedin.com/company/tractian/'> <img draggable="false" src={Linkedin} alt=""/> </Link>
                        <Link to='https://www.facebook.com/tractian'> <img draggable="false" src={Facebook} alt=""/> </Link>
                        <Link to='https://www.instagram.com/tractian/'> <img draggable="false" src={Instagram} alt=""/> </Link>
                        <Link to='https://www.youtube.com/c/TRACTIAN'> <img draggable="false" src={Youtube} alt=""/> </Link>
                    </div>

                    <h2>© Tractian Tecnologia Ltda</h2>
                    <h2>CNPJ xx.xxx.xxx/xxxx-xx</h2>

                </ul>

            </div>
        </footer>
    )
} export default Footer;