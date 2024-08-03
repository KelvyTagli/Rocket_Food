import {Container, Food, Price, Amount, Counter} from './styles'

import { Plus, Minus } from "@phosphor-icons/react";
import { Button } from '../Button'
import { Like } from '../Like';

export function Card({cover, title, description, price}) {
    return(
        <Container>
            <Like/>
            <Food>
                <img src={cover} alt="" />
                <h3>{title} {'>'}</h3>
                <p>{description}</p>
            </Food>
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