import {Container, Price, Amount, Counter} from './styles'

import { Plus, Minus } from "@phosphor-icons/react";
import { Button } from '../Button'
import { Like } from '../Like';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../Services/api';

export function Card({cover, title, description, price,id}) {
    const dishUrl = cover ? `${api.defaults.baseURL}/photoFiles/${cover}` : cover;

    const [coverDish, setcoverDish] = useState(dishUrl)
    const navigator = useNavigate()

    const [counter, setCounter] = useState(0)

    function handlerDetails(id) {
        navigator(`/Rocket_Food/Dish/${id}`)
    }

    const handlerCounterUp = () => {
        setCounter(counter + 1)
    };

    const handlerCounterDown = () => {
        setCounter(counter - 1)
    };
    
    return(
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
                    <button onClick={handlerCounterDown}><Minus size={18}/></button>
                    <span>{counter}</span>
                    <button onClick={handlerCounterUp}><Plus size={18}/></button>
                </Counter>
                <Button title="Incluir"/>
            </Amount>
        </Container>
    )
}