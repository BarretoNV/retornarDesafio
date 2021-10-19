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
                    <button id="glowOnHover" type="button">SAIBA MAIS!</button>
                </div>

                <img draggable="false" src={Robozin} alt=""/>

            </nav>

            <section id="whyTractian">
                <h1> Por que a Tractian? </h1>

                <div className="cardsWrapper">
                    <div className="whyCards">
                        <h2>Manutenção Preditiva</h2>
                        <p>Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.</p>
                    </div>
                    <div className="whyCards">
                        <h2>Automação de OS</h2>
                        <p>Automatize a geração de ordens de serviço com base em horas ou em dias e melhore a sua preventiva.</p>
                    </div>
                    <div className="whyCards">
                        <h2>Monitoramento Online</h2>
                        <p>Sensor Tractian coleta dados de vibração, temperatura, horímetro e consumo de energia em tempo real.</p>
                    </div>
                    <div className="whyCards">
                        <h2>Setup Instantâneo</h2>
                        <p>Solução Plug & Play, sem necessidade de gateways ou roteadores, comunicação via 2G/3G independente.</p>
                    </div>
                </div>

                <h1>Sua máquinas mais seguras, com a nossa ajuda.</h1>


                <div className="dataWhy">

                    <div className="dataCard">
                        <h3>90%</h3>
                        <p>DE ASSERTIVIDADE DOS INSIGHTS GERADOS PELA PLATAFORMA.</p>
                    </div>

                    <div class="dataCard">
                        <h3>45%</h3>
                        <p>AUMENTO DE CONFIABILIDADE DAS MÁQUINAS COM SISTEMA TRACTIAN.</p>
                    </div>

                    <div class="dataCard">
                        <h3>30%</h3>
                        <p>REDUÇÃO DAS OCORRÊNCIAS DE ÚLTIMA HORA NA MANUTENÇÃO.</p>
                    </div>
                </div>

                <button id="glowOnHover" type="button">FAÇA A ESCOLHA CERTA!</button>
            </section>

            <Footer />
        </section>
    )

} export default Home;