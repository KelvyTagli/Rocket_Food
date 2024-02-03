import {MagnifyingGlass, SignOut, Receipt} from "@phosphor-icons/react"

import { Container, Section,Logo, Search, Request, Logout} from "./styles";
import Polygon from "../../assets/Polygon.svg"

export function Header() {
    return(
        <Container>
            <Section>
                <Logo>
                    <img src={Polygon} alt="" />
                    <h2>food explorer</h2>
                </Logo>
                <Search>
                    <MagnifyingGlass size={20}/>
                    <input type="text" placeholder="Busque por pratos ou ingredientes" />
                </Search>
            </Section>
            <Request>
                <button>
                    <Receipt size={30} />
                    {"Pedidos (0)"}
                </button>
            </Request>
            <Logout>
                <SignOut size={30} />
            </Logout>
        </Container>
    )
}