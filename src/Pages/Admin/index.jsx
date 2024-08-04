import { Container } from "./styles";

import { Admin_Header } from "../../Components/admin_Header";
import { Billboard } from "../../Components/Billboard";
import { Footer } from "../../Components/Footer";

export function Admin() {

    return(
        <Container>
            <Admin_Header/>
            <Billboard/>
            <Footer/>
        </Container>
    )
}