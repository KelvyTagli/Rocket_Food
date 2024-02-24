import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Billboard } from "../../Components/Billboard";
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";
import { Footer } from "../../Components/Footer";

import Toradas from '../../assets/Torradas.png'

export function Home() {

    const items = [
        <Card
            cover={Toradas}
            title="Spaguetti Gambe >" 
            description={"Massa fresca com caramões e pesto."} 
            price={"44,90"}
        />,
        <Card
            cover={Toradas}
            title="Spaguetti Gambe >" 
            description={"Massa fresca com caramões e pesto."} 
            price={"44,90"}
        />,
        <Card
            cover={Toradas}
            title="Spaguetti Gambe >" 
            description={"Massa fresca com caramões e pesto."} 
            price={"44,90"}
        />,
        <Card
            cover={Toradas}
            title="Spaguetti Gambe >" 
            description={"Massa fresca com caramões e pesto."} 
            price={"44,90"}
        />,
        <Card
            cover={Toradas}
            title="Spaguetti Gambe >" 
            description={"Massa fresca com caramões e pesto."} 
            price={"44,90"}
        />,
        <Card
            cover={Toradas}
            title="Spaguetti Gambe >" 
            description={"Massa fresca com caramões e pesto."} 
            price={"44,90"}
        />
    ] 

    return(
        <Container>
            <Header/>
            <Billboard/>

            <div>
                <Section title="Refeições"> 
                <Card
                    cover={Toradas}
                    title="Spaguetti Gambe >" 
                    description={"Massa fresca com caramões e pesto."} 
                    price={"44,90"}
                />
                <Card
                    cover={Toradas}
                    title="Spaguetti Gambe >" 
                    description={"Massa fresca com caramões e pesto."} 
                    price={"44,90"}
                />
                <Card
                    cover={Toradas}
                    title="Spaguetti Gambe >" 
                    description={"Massa fresca com caramões e pesto."} 
                    price={"44,90"}
                />
                <Card
                    cover={Toradas}
                    title="Spaguetti Gambe >" 
                    description={"Massa fresca com caramões e pesto."} 
                    price={"44,90"}
                />
                <Card
                    cover={Toradas}
                    title="Spaguetti Gambe >" 
                    description={"Massa fresca com caramões e pesto."} 
                    price={"44,90"}
                />
                <Card
                    cover={Toradas}
                    title="Spaguetti Gambe >" 
                    description={"Massa fresca com caramões e pesto."} 
                    price={"44,90"}
                />
                </Section>

                <Section title="Sobremesas" />

                <Section title="Bebidas" />

            </div>
            
            <Footer/>
        </Container>
    )
}