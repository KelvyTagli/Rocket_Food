import { Container, Image, Title } from "./styles";

export function Billboard() {
    return(
        <Container>
            <Image />
            <Title>
                <label>Sabores inigualáveis</label>
                <label className="sub_title">Sinta o cuidado do preparo com ingredientes selecionados</label>
            </Title>
        </Container>
    )
}