import {MagnifyingGlass, SignOut, Receipt} from "@phosphor-icons/react"

import { Container, Section,Logo, Search, Request, Logout} from "./styles";
import Polygon from "../../assets/Polygon.svg"

import * as auth from "../../Hooks/auth";

import { Link } from "react-router-dom";
import {Button} from "../Button"
import { useNavigate } from 'react-router-dom';

export function Header() {

    const {signOut} = auth.useAuth()
    const navigator = useNavigate()

    function handlerOrders() {
        navigator(`/Rocket_Food/Orders`)
    }

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
                <Button
                    icon={Receipt}
                    title={"Pedidos"}
                    onClick={handlerOrders}
                />
            </Request>
            <Logout>
                <SignOut size={30} onClick={signOut}/>
            </Logout>
        </Container>
    )
}