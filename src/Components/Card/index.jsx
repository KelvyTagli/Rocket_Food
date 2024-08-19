import {Container, Price, Amount, Counter} from './styles'

import { Plus, Minus } from "@phosphor-icons/react";
import { Button } from '../Button'
import { Like } from '../Like';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../Services/api';

export function Card({cover, title, description, price,id}) {
    const dishUrl = cover ? `${api.defaults.baseURL}/photoFiles/${cover}` : cover;

    const [coverDish, setcoverDish] = useState(dishUrl)
    
    return(
        <Container>
            <Like/>
            <Link to={`/Rocket_Food/Dish/${id}`} className='Food'>
                <img src={coverDish} alt="Foto do Prato" />
                <h3>{title} {'>'}</h3>
                <p>{description}</p>
            </Link>
            <Price>R$ {price}</Price>
            <Amount>
                <Counter>
                    <button><Minus size={18}/></button>
                    <span>01</span>
                    <button><Plus size={18}/></button>
                </Counter>
                <Button title="Incluir"/>
            </Amount>
        </Container>
    )
}