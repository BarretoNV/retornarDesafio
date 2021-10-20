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
import ProfilePic from '../../img/profilepic.jpg';
import LeoeMih from '../../img/leoemih.png';
import ReactLogo from '../../img/reactlogo.png';


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

                <section id="achievements">
                    <img draggable="false" src={CincoEstrelas} alt=""/>
                    <h2>#1 Em soluções para Manutenção.</h2>

                    <div className="feedbacks">
                        <div className="clientText">
                            <img src={ProfilePic} alt=""/>
                            <h3>"O dispositivo traz mais confiabilidade ao processo, agilizando a análise de informações e evitando paradas na produção, o que impacta positivamente a produtividade."</h3>
                            <div>
                                <h4>Eduarda Buaiz</h4>
                                <p>Diretora Geral - Indústria Alimentícia</p>
                            </div>
                        </div>
                        <div className="clientText">
                            <img src={ProfilePic} alt=""/>
                            <h3>"Uma criança pode instalar o sensor da Tractian, e a plataforma é tão fácil de usar quanto uma rede social. Todo sistema é muito simples e confiável."</h3>
                            <div>
                                <h4>Renê Santos</h4>
                                <p>Técnico Mecânico - Indústria Cervejeira</p>
                            </div>
                        </div>
                        <div className="clientText">
                            <img src={ProfilePic} alt=""/>
                            <h3>"Antes da Tractian, a falha acontecia sem que nós tivéssemos nenhuma chance de reação. Agora nós conseguimos identificar qualquer anomalia fora do normal e isso nos permite fazer a intervenção antes que a quebra aconteça."</h3>
                            <div>
                                <h4>Tiago Junqueira</h4>
                                <p>Supervisor de Manutenção Geral - AmstedMaxion</p>
                            </div>
                        </div>
                        <div className="clientText">
                            <img src={ProfilePic} alt=""/>
                            <h3>"Com a Tractian otimizamos tempo, reduzimos custo com falhas antecipadas pela solução. A tecnologia deles é uma grande ferramenta no acompanhamento e gestão dos nossos ativos que são um dos patrimônios da empresa."</h3>
                            <div>
                                <h4>Gustavo Ribeiro</h4>
                                <p>Diretor Industrial - Indústria Gerenciamento de Resíduos</p>
                            </div>
                        </div>
                    </div>

                </section>                

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
                    <h1>Detectamos seus problemas com precisão.</h1>
                    <div className="gridProblems">

                        <div className="problem">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="exclamationTriangle" />
                            <h4>Desalinhamento</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faExclamationCircle} className="exclamationCircle" />
                            <h4>Desbalanceamento</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faMinusCircle} className="minusCircle" />
                            <h4>Folga Mecânica</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faFireAlt} className="fireAlt" />
                            <h4>Temperatura Anormal</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faBroadcastTower} className="broadcastTower" />
                            <h4>Vibração Anormal</h4>
                        </div>
                        <div className="problem">
                            <FontAwesomeIcon icon={faLevelDownAlt} className="levelDownAlt" />
                            <h4>Parada Inesperada</h4>
                        </div>

                    </div>
                </div>

                <div className="schedule">
                    <input placeholder="E-mail profissional"></input>
                    <button id="glowOnHover" type="button">AGENDE UMA DEMO</button>
                </div>
                
                <h3>E mais! Descbura o quanto você economiza com a nossa solução!!</h3>
                <button id="glowOnHover" type="button">USE NOSSA CALCULADORA E DESCUBRA!</button>

            </section>

            <section id="workAndBLog">
                <div className="workWithUs">
                    <h1>ENTRE PARA A EQUIPE!</h1>
                    <img draggable="false" src={LeoeMih} alt=""/>
                    <p>Veja as vagas e seja parte de uma equipe de alta performance.</p>
                    <button id="glowOnHover" type="button">CONFIRA AS VAGAS!</button>
                </div>
                
                <div className="seeTheBlog">
                    <h1>Novidades no Blog</h1>
                    <p>Como funciona o sensor de monitoramento online da TRACTIAN?</p>
                    <p>Saiba tudo sobre a gestão de ativos industriais</p>
                    <p>Conheça as 10 causas mais comuns em motores elétricos e saiba como evitá-las</p>
                    <button className="blogButton" type="button">Ir para o Blog</button>
                </div>
            </section>

            <section id="finalContent">
                <form className="demoForm">

                    <h1>Melhore a sua manutenção!</h1>
                    <p>Preencha o formulário para uma demonstração.</p>

                    <input id="inputID" type="text" className="textBox" placeholder="Nome*"/>

                    <input id="inputID" type="text" className="textBox" placeholder="Seu E-mail*"/>

                    <input id="inputID" type="text" className="textBox" placeholder="Seu Cargo*"/>

                    <input id="inputID" type="text" className="textBox" placeholder="Telefone*"/>
                    
                    <div className="buttonsForm">
                        <button id="glowOnHover" type="submit">ENVIAR</button>
                    </div>

                </form>

                <h2>Conheça nossos parceiros!</h2>
                <div className="partnersLogos">
                    <img draggable="false" src={ReactLogo} alt=""/>
                    <img draggable="false" src={ReactLogo} alt=""/>
                    <img draggable="false" src={ReactLogo} alt=""/>
                    <img draggable="false" src={ReactLogo} alt=""/>
                    <img draggable="false" src={ReactLogo} alt=""/>
                    <img draggable="false" src={ReactLogo} alt=""/>
                    <img draggable="false" src={ReactLogo} alt=""/>
                    <img draggable="false" src={ReactLogo} alt=""/>
                </div>
            </section>

            <Footer />
        </section>
    )

} export default Home;