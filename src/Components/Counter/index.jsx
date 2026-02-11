import { Container} from "./styles";
import { Button } from "../Button"

import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";

export function Counter({ title, quantity, setQuantity, onInclude }) {
    return (
        <Container>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={18}/></button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}><Plus size={18}/></button>
            <div>
                <Button
                title={`Incluir - R$ ${title}`}
                onClick ={onInclude}
            />
            </div>
        </Container>
    )
}
