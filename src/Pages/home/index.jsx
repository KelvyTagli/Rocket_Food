import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Billboard } from "../../Components/Billboard";
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";
import { Footer } from "../../Components/Footer";

import Toradas from '../../assets/Torradas.png'
import sobremesa from '../../assets/image 7.png'
import Maracuja from '../../assets/Maracuja.png'


export function Home() {

    return(
        <Container>
            <Header/>
            <Billboard/>

            <div>
                <Section title="Refeições">
                    <Card
                        cover={Toradas}
                        title="Spaguetti Gambe" 
                        description={"Massa fresca com caramões e pesto."} 
                        price={"41,90"}
                    />
                </Section> 

                <Section title="Sobremesas">
                    <Card
                        cover={sobremesa}
                        title={"Macarons"}
                        description={"Farinha de ameêndoas, manteiga, claras e açúcar"}
                        price={"79,90"}
                    />
                </Section>

                <Section title="Bebidas">
                    <Card
                        cover={Maracuja}
                        title={"Suco de Maracujá"}
                        description={"Suco de Maracujá gelado, cremoso, docinho"}
                        price={"13,90"}
                    />
                </Section>

            </div>
            
            <Footer/>
        </Container>
    )
}