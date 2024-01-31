import { Container, Form, Background } from "./styles";
import background from '../../assets/Polygon.svg'

import { Input } from "../../Components/Input";

export function SignIn() {
    return(
        <Container>
            <Background>
                <img src={background} alt="logo polygon" />
                <h1>food explorer</h1>
            </Background>
            <Form>
                <h1>Faça login</h1>
                <Input placeholder="E-mail" type="text" onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" onChange={e => set(e.target.value)}/>
            </Form>
        </Container>
    )
}