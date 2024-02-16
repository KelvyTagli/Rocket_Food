import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Billboard } from "../../Components/Billboard";
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";
import { Footer } from "../../Components/Footer";

import { Carousel, CarouselItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Toradas from '../../assets/Torradas.png'

export function Home() {
    return(
        <Container>
            <Header/>
            <Billboard/>

            <div>
                <Section title="Refeições">
                   <Carousel>
                        <Carousel.Item interval={1500}>
                            <Card
                            cover={Toradas}
                            title="Spaguetti Gambe >" 
                            description={"Massa fresca com caramões e pesto."} 
                            price={"41,90"}
                            />
                        </Carousel.Item>
                        <CarouselItem interval={1500}>
                            <Card
                            cover={Toradas}
                            title="Spaguetti Gambe >" 
                            description={"Massa fresca com caramões e pesto."} 
                            price={"47,90"}
                            />
                        </CarouselItem>
                        <CarouselItem interval={1500}>
                            <Card
                            cover={Toradas}
                            title="Spaguetti Gambe >" 
                            description={"Massa fresca com caramões e pesto."} 
                            price={"47,90"}
                            />
                        </CarouselItem>
                        <CarouselItem interval={1500}>
                            <Card
                            cover={Toradas}
                            title="Spaguetti Gambe >" 
                            description={"Massa fresca com caramões e pesto."} 
                            price={"47,90"}
                            />
                        </CarouselItem>
                        <CarouselItem interval={1500}>
                            <Card
                            cover={Toradas}
                            title="Spaguetti Gambe >" 
                            description={"Massa fresca com caramões e pesto."} 
                            price={"47,90"}
                            />
                        </CarouselItem>
                   </Carousel>
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