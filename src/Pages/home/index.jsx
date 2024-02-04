import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Billboard } from "../../Components/Billboard";
import { Footer } from "../../Components/Footer";

export function Home() {
    return(
        <Container>
            <Header/>
            <Billboard/>
            <Footer/>
        </Container>
    )
}