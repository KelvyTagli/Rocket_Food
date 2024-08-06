import {MagnifyingGlass, SignOut, Receipt} from "@phosphor-icons/react"

import { Container, Section,Logo, Search, Request, Logout} from "./styles";
import Polygon from "../../assets/Polygon.svg"

import { Button } from "../Button";
import { Link } from "react-router-dom";

import * as auth from "../../Hooks/auth";

export function Admin_Header() {
    const {signOut} = auth.useAuth()
    return(
        <Container>
            <Section>
                <Logo>
                    <img src={Polygon} alt="Polygon" />
                    <div className="Titulo">
                        <h2>food explorer</h2>
                        <p>admin</p>
                    </div>
                </Logo>
                <Search>
                    <MagnifyingGlass size={20}/>
                    <input type="text" placeholder="Busque por pratos ou ingredientes" />
                </Search>
            </Section>
            <Request>
               <Link to='/Rocket_Food/exe'>
               <Button
                    title={"Novo prato"}
                />
               </Link>
            </Request>
            <Logout>
                <SignOut size={30} onClick={signOut}/>
            </Logout>
        </Container>
    )
}