import { Container, Logo, Search } from "./styles";
import background from '../../assets/Polygon.svg'


import {MagnifyingGlass} from "@phosphor-icons/react"


export function Header() {
    return(
        <Container>
            <Logo>
                <img src={background} alt="" />
                <h3>food explorer</h3>
            </Logo>
            <Search>
                <img src={MagnifyingGlass} alt="" />
            </Search>
        </Container>
    )
}