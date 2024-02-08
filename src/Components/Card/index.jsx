import {Container, Food, Price, Like} from './styles'

import { Heart } from "@phosphor-icons/react";
import Toradas from '../../assets/Torradas.png'

export function Card({title, description, price}) {
    return(
        <Container>
            <Like>
                <Heart size={32}/>
            </Like>
            <Food>
                <img src={Toradas} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
            </Food>
                <Price>R$ {price}</Price> 
        </Container>
    )
}