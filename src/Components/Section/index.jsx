import { Container, Content } from "./styles";

export function Section({title, children}) {
    return(
        <Container>
            <h2>{title}</h2>
            <Content>
                {children}
            </Content>
        </Container>
    )
}