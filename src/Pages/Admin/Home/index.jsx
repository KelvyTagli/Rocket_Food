import { Container } from "./styles";

import { Admin_Header } from "../../../Components/admin_Header";
import { Billboard } from "../../../Components/Billboard";
import { Footer } from "../../../Components/Footer";
import { Section } from "../../../Components/Section";
import { Card_admin } from "../../../Components/admin_Card";

import { Children, useEffect, useState } from "react";
import { api } from "../../../Services/api";

export function Admin() {

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
            <Admin_Header/>
            <Billboard/>

            <div>
                <Section title="Refeições">
                    {
                        Dish.map((dish) => (
                            <Card_admin 
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
                        Dessert.map((dessert) => (
                            <Card_admin 
                            key={dessert.id}
                            id={dessert.id}
                            cover={dessert.photo}
                            title={dessert.title}
                            description={dessert.description}
                            price={dessert.price}
                            />
                        ))
                    }
                </Section>

                <Section title="Sobremesas">
                    {
                        Beverages.map((beverages) => (
                            <Card_admin 
                            key={beverages.id}
                            id={beverages.id}
                            cover={beverages.photo}
                            title={beverages.title}
                            description={beverages.description}
                            price={beverages.price}
                            />
                        ))
                    }
                </Section>

            </div>

            <Footer/>
        </Container>
    )
}