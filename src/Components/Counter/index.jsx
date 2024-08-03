import { Container } from "./styles";
import {Button} from '../Button'
import { Minus, Plus } from "@phosphor-icons/react";

export function Counter({title, ...rest}) {
    return(
        <Container>
            <button><Minus size={18}/></button>
            <span>01</span>
            <button><Plus size={18}/></button>
            <div>
            <Button title={`Incluir - R$ ${title}`}/>
            </div>
        </Container>
    )
}