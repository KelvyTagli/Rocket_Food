import { Container, Header, Pix, Credit } from "./styles";
import {CreditCard,DiamondsFour} from "@phosphor-icons/react"

export function CardCredit() {
    return(
        <Container>
            <Header>
                <Pix>
                    <DiamondsFour size={24}/>
                    <p>PIX</p>
                </Pix>
                <Credit>
                    <CreditCard size={24}/>
                    <p>Crédito</p>
                </Credit>
            </Header>
        </Container>
    )
}