import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Billboard } from "../../Components/Billboard";
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";
import { Footer } from "../../Components/Footer";

import { Children, useEffect, useState } from "react";
import { api } from "../../Services/api";


export function Home() {

const [Dish, setDish] = useState([])
const [Dessert, setdessert] = useState([])
const [Beverages, setbeverages] = useState([])

const [refeicoes, setrefeicoes] = useState('Refeições')
const [sobremesa, setsobremesa] = useState('Sobremesas')
const [bebidas, setbebidas] = useState('Bebidas')

useEffect(() => {
    async function fetchDish() {
        const response = await api.get(`/dish?user_id=${1}&category=${refeicoes}`);
        setDish(response.data);
    }
    fetchDish();
},[])

useEffect(() => {
    async function fetchDish() {
        const response = await api.get(`/dish?user_id=${1}&category=${sobremesa}`);
        setdessert(response.data);
    }
    fetchDish();
},[])

useEffect(() => {
    async function fetchDish() {
        const response = await api.get(`/dish?user_id=${1}&category=${bebidas}`);
        setbeverages(response.data);
    }
    fetchDish();
},[])
    return(
        <Container>
            <Header/>
            <Billboard/>

            <div>
                <Section title="Refeições">
                    {
                        Dish.map(dish => (
                            <Card
                            key={dish.id}
                            id={dish.id}
                            cover={dish.photo}
                            title={dish.title} 
                            description={dish.description} 
                            price={dish.price}
                            />
                            ))
                    }
                </Section> 

                <Section title="Sobremesas">
                    {
                        Dessert.map(dish => (
                        <Card
                        key={dish.id}
                        id={dish.id}
                        cover={dish.photo}
                        title={dish.title} 
                        description={dish.description} 
                        price={dish.price}
                        />
                        ))
                        
                    }
                </Section>

                <Section title="Bebidas">
                    {
                        Beverages.map(dish => (
                        <Card
                        key={dish.id}
                        id={dish.id}
                        cover={dish.photo}
                        title={dish.title} 
                        description={dish.description} 
                        price={dish.price}
                        />
                        ))
                    }
                </Section>

            </div>
            
            <Footer/>
        </Container>
    )
}