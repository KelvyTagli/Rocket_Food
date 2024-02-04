import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Billboard } from "../../Components/Billboard";
import { Section } from "../../Components/Section";
import { Footer } from "../../Components/Footer";

export function Home() {
    return(
        <Container>
            <Header/>
            <Billboard/>
            <div>
                <Section title="Refeições"></Section>
                <Section title="Sobremesas"></Section>
                <Section title="Bebidas"></Section>
            </div>
            <Footer/>
        </Container>
    )
}