import {React, useState, createRef} from 'react';
import './style.scss';

function Home() {

    const [selectedFlavor, setSelectedFlavor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedIcing, setSelectedIcing] = useState('')

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

    function handleSelectedFlavor(event) {

        setSelectedFlavor(event.target.value)
        console.log(selectedFlavor)

    }

    function handleSelectedSize(event) {

        setSelectedSize(sizes[event.target.value])
        console.log(selectedSize)

    }
    
    function handleSelectedIcing(event) {

        setSelectedIcing(event.target.value)
        console.log(selectedIcing)

    }

    const [isChecked, setIsChecked] = useState(false);

    const personalization = createRef()
    const flavorAndSize = createRef()
    const cartDisplay = createRef()

    function changedisplay() {

        if (selectedFlavor !== '' && selectedSize !== '') {

            if (isChecked)
                personalization.current.style.display = 'none'
            else
                personalization.current.style.display = 'flex'

            if (isChecked)
                flavorAndSize.current.style.display = 'flex'
            else
                flavorAndSize.current.style.display = 'none'

        } else window.alert("Você precisa escolher todas as opções!")

    }

    function goToCart() {

        if (isChecked)
            cartDisplay.current.style.display = 'none'
        else
            cartDisplay.current.style.display = 'flex'

        if (isChecked)
            personalization.current.style.display = 'flex'
        else
            personalization.current.style.display = 'none'

    }

    return (

        <section id="homeBody">

           <div className="flavor-and-size" ref={flavorAndSize}>

               <h1>Escolha seu açaí 😋😋😋</h1>

                <select onChange={(event) => handleSelectedFlavor(event)} name="flavor">

                    <option disabled selected value=''>Sabor</option>
                    <option value="Banana">Banana</option>
                    <option value="Morango">Morango</option>
                    <option value="Kiwi">Kiwi</option>

                </select>

                <select onChange={(event) => handleSelectedSize(event)} name="size">

                    <option disabled selected value=''>Tamanho</option>

                    {sizes.map((item, index) => (
                        <option value={index} key={index}>{item.title}</option>
                    ))}

                </select>

                <button 
                    className="button" 
                    type="checkbox" 
                    id="checkbox"
                    onClick={() => {

                        setIsChecked(!isChecked);
                        changedisplay()

                    }}> Avançar 
                </button>

           </div>

           <div className="personalization" ref={personalization}>

               <h1>Personalize seu açaí 😋😋😋</h1>

                <select onChange={(event) => handleSelectedIcing(event)} name="icing">

                    <option value=''>Cobertura</option>
                    <option value="Granola">Granola</option>
                    <option value="Paçoca">Paçoca</option>
                    <option value="Leite Ninho">Leite Ninho</option>

                </select>

                <button
                    className="button_return"
                    type="checkbox" 
                    id="checkbox" 
                    onClick={() => {

                    setIsChecked(!isChecked);
                    changedisplay()

                }}> Retornar </button>

                <button
                    className="button"
                    type="checkbox"
                    id="checkbox"
                    onClick={() => {

                        setIsChecked(!isChecked);
                        goToCart()

                }}> Ver pedido </button>

           </div>

           <div className="cart" ref={cartDisplay}>
                <h1> Resumo do seu pedido 😋😋😋</h1>
                <article className="infoPedido">
                    <h2>Tamanho</h2>
                    <span>{selectedSize.title} R$ {selectedSize.value}.00</span>
                </article>
                <article className="infoPedido">
                    <h2>Sabor</h2>
                    <span>{selectedFlavor}</span>
                </article>
                <article className="infoPedido">

                    {selectedIcing ? 
                    
                    <>

                        <h2>Personalizações</h2>
                        <span>{selectedIcing} R$ 3,00</span>
                        
                    </>

                    :

                    <>
                        <h2>Personalizações</h2>
                        <span>Sem cobertura R$ 0,00</span>

                    </>
                
                    }

                </article>
                
                {selectedIcing ? 
                
                    <h2>Valor total: R$ {Number(selectedSize.value + 3)}</h2>
                
                : 
                
                    <h2>Valor total: R$ {Number(selectedSize.value)}</h2>}
                
                <h2>Tempo de preparo: {selectedSize.time} minutos</h2>
                
                <button
                    className="button_modify"
                    type="checkbox"
                    id="checkbox"
                    onClick={() => {

                        setIsChecked(!isChecked);
                        goToCart();

                }}>Modificar pedido</button>

                <button className="button_end"> Finalizar pedido </button>

           </div>

        </section>
    )

} export default Home;