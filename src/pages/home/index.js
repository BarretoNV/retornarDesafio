import React from 'react';
import './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Robozin from '../../img/robozinho.png';

function Home() {

    return (
        <section id="homeBody">

            <Header />
            <nav>
                <div className="textWrapper"> 
                    <h1> Completo e eficiente. </h1>
                    <h2> O nosso sistema preditivo que te dá produtividade e evita falhas, te dando segurança para trabalhar! </h2>
                    <button className="glow-on-hover" type="button">SAIBA MAIS!</button>
                </div>

                <img draggable="false" src={Robozin} alt=""/>

            </nav>

            <section id="whyTractian">
                <h1> Por que a Tractian? </h1>

                <div className="cardsWrapper">
                    <div className="whyCards">
                        <h1>Manutenção Preditiva</h1>
                        <p>Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </section>
    )

} export default Home;