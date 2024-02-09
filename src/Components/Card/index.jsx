import {Container, Food, Price, Like, Amount, Counter} from './styles'

import { Heart, Plus, Minus } from "@phosphor-icons/react";
import Toradas from '../../assets/Torradas.png'
import {Button} from '../Button'

export function Card({title, description, price}) {
    return(
        <Container>
            <Like>
                <button><Heart size={32}/></button>
            </Like>
            <Food>
                <img src={Toradas} alt="" />
                <h3>{title}</h3>
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