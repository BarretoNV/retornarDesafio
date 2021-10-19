import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faExclamationCircle,
 faMinusCircle, faBroadcastTower, faLevelDownAlt,
faFireAlt } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/header';
import Footer from '../../components/footer';

//imagens
import Robozin from '../../img/robozinho.png';
import Robozinha from '../../img/robozinha.png';
import PlugAndPlay from '../../img/plugandplay.png'
import Monitoramento from '../../img/monitoramento.png';
import Gestaodeativos from '../../img/gestaodeativos.png';
import Envio from '../../img/envio.png'
import Cola from '../../img/cola.png';
import Receba from '../../img/receba.png';
import CincoEstrelas from '../../img/cincoestrelas.png';


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

                <div id="rowObjects">
                    <img draggable="false" src={Robozinha} alt=""/>

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
                </div>

                <h2>Sua máquinas mais seguras, com a nossa ajuda.</h2>


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

            <section id="howItWorks">

                <h1>Como funciona?</h1>

                <h2>Mantenha a sua equipe e seus ativos com o <b>melhor desempenho</b></h2>

                <p>Descomplicamos a manutenção preditiva evitando vários problemas:</p>

                <div className="problemsSolved">

                    <div className="example">

                        <img draggable="false" src={PlugAndPlay} alt=""/>

                        <div>
                            <h2>Sensor Plug & Play</h2>
                            <h3>Sem gateway, sem enrolação</h3>
                            <p>
                                Nossos sensores enviam dados do seu equipamento através de rede 2g/3g pensando na facilidade de implementação.
                                Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condição da sua máquina.
                            </p>
                        </div>
                    </div>

                    <div className="exampleReverse">

                        <img draggable="false" src={Monitoramento} alt=""/>

                        <div>
                            <h2>Monitoramento Online</h2>
                            <h3>Plataforma que trabalha por você</h3>
                            <p>
                                A plataforma oferece uma visão ampla da condição da sua máquina.
                                Insights automáticos, detecção de folgas mecânica, desalinhamento, desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de máquina.
                            </p>
                        </div>
                    </div>
                    
                    <div className="example">

                        <img draggable="false" src={Gestaodeativos} alt=""/>

                        <div>
                            <h2>Gestão de Ativos</h2>
                            <h3>Ordens de serviço automatizadas</h3>
                            <p>
                                Pare de estimar dias de funcionamento para manutenção preventiva.
                                Com o horímetro dos nossos sensores, nossa plataforma gera ordens de serviços automáticas com base em horas de funcionamento.
                            </p>
                        </div>
                    </div>                    

                </div>

                <section id="PSPhases">

                    <div className="PSStoryline">

                        <div id="A" className="storylineText">

                            <img draggable="false" src={Envio} alt=""/>
                            <h3>Nós enviamos os sensores</h3>
                            <span>Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI.</span>

                        </div>

                        <div id="B" className="boxStoryline">

                            <h1>1</h1>

                        </div>

                        <div id="C" className="boxStoryline">

                            <h1>2</h1>

                        </div>

                        <div id="D" className="storylineText">

                            <img draggable="false" src={Cola} alt=""/>
                            <h3>Cole em suas máquinas</h3>
                            <span>Nosso sensor é colado na máquina como um bandaid. Ele é responsável por transmitir os dados de vibração e temperatura do equipamento para a plataforma.</span>

                        </div>

                        <div id="E" className="storylineText">

                            <img draggable="false" src={Receba} alt=""/>
                            <h3>Receba Insights valiosos</h3>
                            <span>Nosso sistema centraliza informações precisas sobre suas máquinas, com insights e análises, como saúde do equipamento, detecção de anomalias e variação de espectros.</span>

                        </div>

                        <div id="F" className="boxStoryline">

                            <h1>3</h1>

                        </div>

                    </div>

                </section>

                <div className="detectedProblems">
                    <h1>Detectamos vários problemas com precisão.</h1>
                    <div className="gridProblems">

                        <div className="problem">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="exclamationTriangle" />
                            <h4>Desalinhamento detectado</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faExclamationCircle} className="exclamationCircle" />
                            <h4>Desbalanceamento detectado</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faMinusCircle} className="minusCircle" />
                            <h4>Folga Mecânica detectada</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faFireAlt} className="fireAlt" />
                            <h4>Temperatura Anormal detectada</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faBroadcastTower} className="broadcastTower" />
                            <h4>Vibração Anormal detectada</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faLevelDownAlt} className="levelDownAlt" />
                            <h4>Parada Inesperada detectada</h4>
                        </div>

                    </div>
                </div>                

            </section>

            <section id="achievements">
                <img draggable="false" src={CincoEstrelas} alt=""/>
                <h2>#1 Em soluções para Manutenção.</h2>
            </section>

            <Footer />
        </section>
    )

} export default Home;