import { Container, Form, Background } from "./styles";
import background from '../../assets/Polygon.svg'

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";


export function SignIn() {
    return(
        <Container>
            <Background>
                <img src={background} alt="logo polygon" />
                <h1>food explorer</h1>
            </Background>
            <Form>
                <h1>Faça login</h1>
                <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" type="text" onChange={e => setEmail(e.target.value)}/>
                <Input title="Senha" placeholder="No minimo 6 caracteres" type="password" onChange={e => set(e.target.value)}/>

                <Button title="Entrar"/>
                <a href="/register">Criar uma conta</a>
            </Form>
        </Container>
    )
}