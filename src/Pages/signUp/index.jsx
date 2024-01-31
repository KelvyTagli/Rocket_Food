import { Container,Form,Background } from "./styles";

import background from '../../assets/Polygon.svg'

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";


export function SignUp() {
    return(
        <Container>
            <Background>
                <img src={background} alt="logo Polygon"/>
                <h1>food explorer</h1>
            </Background>
            <Form>
                <h1>Crie sua conta</h1>
                <Input title="Seu nome" placeholder="Exemplo: Kelvy Tagliacolli" type="text" onChange={e => setName(e.target.value)}/>
                <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" type="text" onChange={e => setEmail(e.target.value)}/>
                <Input title="Senha" placeholder="No minimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)}/>

                <Button title={"Criar conta"}/>
                <a to='/'>Já tenho uma conta</a>
            </Form>
        </Container>
    )
}