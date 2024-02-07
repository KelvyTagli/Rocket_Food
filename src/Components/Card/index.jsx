import {Container, Food} from './styles'

import { Heart } from "@phosphor-icons/react";
import Toradas from '../../assets/Torradas.png'

export function Card() {
    return(
        <Container>
            <Heart size={32}/>
            <Food>
                <img src={Toradas} alt="" />
                <h3>Torradas de Parma</h3>
                <p>Massa fresca com caramões e pesto.</p>
            </Food>
        </Container>
    )
}