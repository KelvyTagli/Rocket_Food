import { Container } from "./style";
import { PencilIcon } from "@phosphor-icons/react"

export function Edit({id}) {

    return (
        <Container>
            <button>
                <PencilIcon size={30}/>
            </button>
        </Container>
    ) 
}