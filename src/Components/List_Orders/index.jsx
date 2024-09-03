import { Container,Info } from "./styles";
import Maracuja from "../../assets/Maracuja.png"

export function InfoOrders() {
    return(
        <Container>
            <img src={Maracuja} alt={"title"} />
            <Info>
                <h1>
                    1x Salada Radish 
                    <p>R$ 25,95</p>
                </h1>
                <button>Excluir</button>
            </Info>
        </Container>
    )
}