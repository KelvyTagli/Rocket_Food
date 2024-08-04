import {MagnifyingGlass, SignOut, Receipt} from "@phosphor-icons/react"

import { Container, Section,Logo, Search, Request, Logout} from "./styles";
import Polygon from "../../assets/Polygon.svg"

import * as auth from "../../Hooks/auth";

export function Header() {
    const {signOut} = auth.useAuth()
    return(
        <Container>
            <Section>
                <Logo>
                    <img src={Polygon} alt="Polygon" />
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
                <SignOut size={30} onClick={signOut}/>
            </Logout>
        </Container>
    )
}