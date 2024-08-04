import { Container, Description, ingredients} from "./styles";

import {Header} from '../../Components/Header'
import {Footer} from '../../Components/Footer'

import { CaretLeft} from "@phosphor-icons/react";
import Maracuja from '../../assets/Maracuja.png'

import {Tag} from '../../Components/Tag'
import { Counter } from "../../Components/Counter";
import { Link } from "react-router-dom";

export function Dish() {
    return(
        <Container>
            <Header/>
            <Link to="/Rocket_Food/" className="Button_Back">
                <CaretLeft size={30} />Voltar
            </Link>
            <Description>
                <img src={Maracuja} alt="suco de maracujá" />
                <div>
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                    <ingredients>
                        <Tag title={"Suco"}/>
                        <Tag title={"Suco"}/>
                        <Tag title={"Suco"}/>
                    </ingredients>
                    <Counter title={"23,90"}/>
                </div>
            </Description>
            <Footer/>
        </Container>
    )
}