import { Container, Logo } from "./styles";

import logo from '../../assets/Polygon2.svg'

export function Footer() {
    return(
        <Container>
            <Logo>
                <img src={logo} alt="polygon"/>
                <h3>food explorer</h3>
            </Logo>
            <p>&copy; 2023 - todos os direitos reservados</p>
        </Container>
    )
}