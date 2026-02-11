import { Container, Info } from "./styles";

export function InfoOrders({ data, onRemove }) {
    
  
    if (!data) {
        return null;
    }
    return (
        <Container>
            <img src={data.cover} alt={data.title} />
            
            <Info>
                <h1>
                    {data.quantity}x {data.title}
                    <h5>R$ {data.price}</h5>
                </h1>
                <button type="button" onClick={() => onRemove(data.id)}>
                    Excluir
                </button>
            </Info>
        </Container>
    );
}
