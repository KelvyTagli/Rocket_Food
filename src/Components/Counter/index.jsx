import { Container } from "./styles";
import {Button} from '../Button'
import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";

export function Counter({title, ...rest}) {

    const [counter, setCounter] = useState(0)

    const handlerCounterUp = () => {
        setCounter(counter + 1)
    };

    const handlerCounterDown = () => {
        setCounter(counter - 1)
    };
    return(
        <Container>
            <button onClick={handlerCounterDown}><Minus size={18}/></button>
            <span>{counter}</span>
            <button onClick={handlerCounterUp}><Plus size={18}/></button>
            <div>
            <Button title={`Incluir - R$ ${title}`}/>
            </div>
        </Container>
    )
}