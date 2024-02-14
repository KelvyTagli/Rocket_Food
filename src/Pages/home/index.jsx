import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Billboard } from "../../Components/Billboard";
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";
import { Footer } from "../../Components/Footer";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Toradas from '../../assets/Torradas.png'

export function Home() {
    return(
        <Container>
            <Header/>
            <Billboard/>

            <div>
                <Section title="Refeições">
                    <button>
                        <CaretLeft size={32} />
                    </button>

                    <Card
                        cover={Toradas}
                        title="Spaguetti Gambe >" 
                        description={"Massa fresca com caramões e pesto."} 
                        price={"47,90"}
                     />

                    <Card
                        cover={Toradas}
                        title="Spaguetti Gambe >" 
                        description={"Massa fresca com caramões e pesto."} 
                        price={"47,90"}
                     />

                    <Card
                        cover={Toradas}
                        title="Spaguetti Gambe >" 
                        description={"Massa fresca com caramões e pesto."} 
                        price={"47,90"}
                     />

                    <button>
                        <CaretRight size={32} />
                    </button>
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