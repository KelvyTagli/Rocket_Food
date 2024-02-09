import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Billboard } from "../../Components/Billboard";
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";
import { Footer } from "../../Components/Footer";

export function Home() {
    return(
        <Container>
            <Header/>
            <Billboard/>
            <div>
                <Section title="Refeições">
                    <Card title="Torradas de Parma" description={"Massa fresca com caramões e pesto."} price={"47,90"}/>
                    <Card/>
                    <Card/>
                </Section>

                <Section title="Sobremesas">
                    
                </Section>

                <Section title="Bebidas">
                    
                </Section>
            </div>
            <Footer/>
        </Container>
    )
}