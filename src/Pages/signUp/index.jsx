import { Container,Form,Background } from "./styles";

import background from '../../assets/Polygon.svg'

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { api } from '../../Services/api'


export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [admin, setAdmin] = useState("")

    const navigate = useNavigate()

    function handlerSignUp() {
        if(!name || !email || !password) {
            return alert('preencha todos os campos!')
        }

        api.post("/users", {name, email, password, admin}).then(() =>{
            alert('Usuário cadastrado com sucesso!')
            navigate(-1)
        }).catch( error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possivel cadastrar')
            }
        })
    }
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

                <Button title={"Criar conta"} onClick={handlerSignUp}/>
                <Link to='/'>
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    )
}