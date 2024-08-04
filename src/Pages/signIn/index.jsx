import { Container, Form, Background } from "./styles";
import background from '../../assets/Polygon.svg'

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { useAuth } from "../../Hooks/auth";
import { useState } from "react";
import { Link } from "react-router-dom";


export function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signIn} = useAuth()

    function handlerSignIn() {
        signIn({email, password})
    }

    return(
        <Container>
            <Background>
                <img src={background} alt="logo polygon" />
                <h1>food explorer</h1>
            </Background>
            <Form>
                <h1>Faça login</h1>
                <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" type="text" onChange={e => setEmail(e.target.value)}/>
                <Input title="Senha" placeholder="No minimo 6 caracteres" type="password" onChange={e => setPassword(e.target.value)}/>

                <Button title="Entrar" onClick={handlerSignIn}/>
                <Link to="/Rocket_Food/register">Criar uma conta</Link>
            </Form>
        </Container>
    )
}