import { Container, Price, Amount, Counter } from './styles'
import { Plus, Minus } from "@phosphor-icons/react";
import { Button } from '../Button'
import { Like } from '../Like';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../Services/api';

export function Card({cover, title, description, price, id}) {
    const dishUrl = cover ? `${api.defaults.baseURL}/photoFiles/${cover}` : cover;

    const [coverDish] = useState(dishUrl);

    const [quantity, setQuantity] = useState(1); 

    const navigator = useNavigate();

    const [counter, setCounter] = useState(0)

    function handlerDetails(id) {
        navigator(`/Rocket_Food/Dish/${id}`);
    }

    function handleAdd() { setQuantity(prev => prev + 1); }
    
    function handleRemove() { setQuantity(prev => (prev > 1 ? prev - 1 : 1)); }

    function handleInclude() {
        const cartItem = { id, title, price, quantity, cover: coverDish };
        
        const existingCart = JSON.parse(localStorage.getItem('@rocketfood:Produtos')) || [];
        
        existingCart.push(cartItem);
        
        localStorage.setItem('@rocketfood:Produtos', JSON.stringify(existingCart));
        alert("Item adicionado ao carrinho!");
    }

    return (
        <Container>
            <Like/>
            <a onClick={() => handlerDetails(id)} className='Food'>
                <img src={coverDish} alt="Foto do Prato" />
                <h3>{title} {'>'}</h3>
                <p>{description}</p>
            </a>
            <Price>R$ {price}</Price>
            <Amount>
                <Counter>
                    <button onClick={handleRemove}><Minus size={18}/></button>
                    <span>{String(quantity).padStart(2, '0')}</span>
                    <button onClick={handleAdd}><Plus size={18}/></button>
                </Counter>
                <Button title="Incluir" onClick={handleInclude}/>
            </Amount>
        </Container>
    );
}
