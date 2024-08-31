import { Container, Request, Orders, Payment } from './styles';
import { Header } from '../../Components/Header'

import { Link } from 'react-router-dom';
import { CaretLeft } from "@phosphor-icons/react";

export function Order() {
    return(
        <Container>
            <Header/>
            <Link to="/Rocket_Food/" className="Button_Back">
                <CaretLeft size={30} />Voltar
            </Link>
            <Orders>
                <Request>
                    <h1>Meu pedido</h1>
                </Request>
                <Payment>
                    <h1>Pagamento</h1>
                </Payment>
            </Orders>
        </Container>
    )
}