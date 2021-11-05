import {React, useState, createRef} from 'react';
import './style.scss';

function Home() {

    // Variáveis para pegar os valores selecionados
    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedIcing, setSelectedIcing] = useState('');

    // constantes que podem ser modificadas para a precificação
    const icingPrice = 3; //preço da personalização
    const flavorPrice = 0; //preço dos sabores

    // dados de sabores, personalizações e tamanho
    const flavors = [{title: "Banana"}, {title: "Morango"}, {title: "Kiwi"},];
    const icings = [{title: "Nenhum"}, {title: "Granola"}, {title: "Paçoca"}, {title: "Leite Ninho"},];
    const sizes = [
         {
            title: "Pequeno",
            size: "300",
            value: 10,
            time: 5,  
        },
         {
            title: "Médio",
            size: "500",
            value: 12,
            time: 7,
        },
         {
            title: "Grande",
            size: "700",
            value: 15,
            time: 9,
        },
    ]

    // funções para pegar os valores selecionados
    function handleSelectedFlavor(event) {

        setSelectedFlavor(flavors[event.target.value])
        console.log(selectedFlavor)

    }

    function handleSelectedSize(event) {

        setSelectedSize(sizes[event.target.value])
        console.log(selectedSize)

    }
    
    function handleSelectedIcing(event) {

        setSelectedIcing(icings[event.target.value])
        console.log(selectedIcing)

    }

    //variáveis que são usadas para a mudança de tela
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    //variáveis que se referenciam a cada tela (div) 
    const flavorAndSize = createRef()
    const icing = createRef()
    const cartDisplay = createRef()

    //função que muda da tela dos sabores e tamanho para personalização
    function changeDisplay() {

        if (selectedFlavor !== '' && selectedSize !== '') {

            if (isChecked){
                icing.current.style.display = 'none'
                flavorAndSize.current.style.display = 'flex'
            }else{
                icing.current.style.display = 'flex'
                flavorAndSize.current.style.display = 'none'
            }

        } else window.alert("Você precisa escolher todas as opções!")

    }

    //função que muda da personalização para a tela de preço
    function goToCart() {

        if (isChecked2){
            cartDisplay.current.style.display = 'none'
            icing.current.style.display = 'flex'
        }else {
            cartDisplay.current.style.display = 'flex'
            icing.current.style.display = 'none'            
        }
    }

    return (

        <section id="homeBody">

           <div className="flavor-and-size" ref={flavorAndSize}>

                <h1>Escolha seu açaí 😋😋😋</h1>

                {/* Selecionar o sabor */}
                <select onChange={(event) => handleSelectedFlavor(event)} name="flavor">

                    <option disabled selected value=''>Sabor</option>
                    {flavors.map((item, index) => (
                        <option value={index} key={index}>{item.title}</option>
                    ))}

                </select>

                {/* Selecionar o tamanho */}
                <select onChange={(event) => handleSelectedSize(event)} name="size">

                    <option disabled selected value=''>Tamanho</option>

                    {sizes.map((item, index) => (
                        <option value={index} key={index}>{item.title}</option>
                    ))}

                </select>

                {/* Avançar para a próxima página */}
                <button 
                    className="button" 
                    type="checkbox" 
                    onClick={() => {

                        setIsChecked(!isChecked);
                        changeDisplay()

                    }}> Avançar 
                </button>

           </div>

           <div className="icing" ref={icing}>

                <h1>Personalize seu açaí 😋😋😋</h1>
                {/* Selecionar a personalização */}
                <select onChange={(event) => handleSelectedIcing(event)} name="icing">

                    {icings.map((item, index) => (
                        <option value={index} key={index}>{item.title}</option>
                    ))}

                </select>

                {/* Voltar para a página anterior */}
                <button
                    className="button"
                    type="checkbox"  
                    onClick={() => {

                    setIsChecked(!isChecked);
                    changeDisplay()

                }}> Retornar </button>

                {/* Avançar para a próxima página */}
                <button
                    className="button"
                    type="checkbox"
                    onClick={() => {

                        setIsChecked2(!isChecked2);
                        goToCart()

                }}> Ver pedido </button>

           </div>

           <div className="cart" ref={cartDisplay}>

                <h1> Resumo do seu pedido 😋😋😋</h1>

                {/* cada article mostra uma info */}
                <article className="infoPedido">
                    <h2>Tamanho:</h2>
                    <span>{selectedSize.title} R$ {selectedSize.value},00</span>
                </article>

                <article className="infoPedido">
                    <h2>Sabor:</h2>
                    <span>{selectedFlavor.title} R$ {flavorPrice},00</span>
                </article>
                {/* Mostra a personalização (se a seleção não for "Nenhum", mostra a cobertura e o preço, se não, mostra 0) */}
                <article className="infoPedido">

                    {selectedIcing.title !== 'Nenhum' ?
                    
                    <>

                        <h2>Personalizações:</h2>
                        <span>{selectedIcing.title} R$ {icingPrice},00</span>
                        
                    </>

                    :

                    <>
                        <h2>Personalizações:</h2>
                        <span>Sem cobertura R$ {flavorPrice},00</span>

                    </>
                
                    }

                </article>
                {/* Mesma lógica anterior, mas caso a cobertura seja diferente de "Nenhum", soma o preço dela, se não, mostra o preço normal */}
                { selectedIcing.title !== 'Nenhum' ? 
                
                    <h2>Valor total: R$ {Number(selectedSize.value + icingPrice)}</h2>
                
                : 
                
                    <h2>Valor total: R$ {Number(selectedSize.value)}</h2>
        
                }
                {/* Mostra o tempo de preparo que está ligado ao tamanho selecionado */}
                <h2>Tempo de preparo: {selectedSize.time} min</h2>

                {/* Volta para a página anterior */}
                <button
                    className="button"
                    type="checkbox"
                    onClick={() => {

                        setIsChecked2(!isChecked2);
                        goToCart();

                }}>Modificar pedido</button>

                {/* Finalizaria o pedido */}
                <button className="button"> Finalizar pedido </button>

           </div>

        </section>
    )

} export default Home;