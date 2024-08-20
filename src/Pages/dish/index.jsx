import { Container, Description, Ingredients} from "./styles";

import {Header} from '../../Components/Header'
import {Footer} from '../../Components/Footer'

import { CaretLeft} from "@phosphor-icons/react";
import Maracuja from '../../assets/Maracuja.png'

import {Tag} from '../../Components/Tag'
import { Counter } from "../../Components/Counter";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../Services/api";

export function Dish() {

    const params = useParams()
    const [data, setdata] = useState([])

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dish/${params.id}`);
            setdata(response.data);
        }
        fetchDish();
    },[])

    console.log(data.photo)

    const dishphoto = data.photo ? `${api.defaults.baseURL}/photoFiles/${data.photo}` : Maracuja

    const [coverDish, setcoverDish] = useState(dishphoto)

    return(
        <Container>
            <Header/>
            <Link to="/Rocket_Food/" className="Button_Back">
                <CaretLeft size={30} />Voltar
            </Link>
            {
                data &&
                <Description>
                <img src={coverDish} alt="" />
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    {
                        data.tags &&
                        <Ingredients>
                            {
                                data.tags.map(tag => (
                                    <Tag 
                                    key={tag.id}
                                    title={tag.name}
                                    />
                                ))
                            }
                        </Ingredients>
                    }
                    <Counter title={data.price}/>
                </div>
            </Description>
            }
            <Footer/>
        </Container>
    )
}