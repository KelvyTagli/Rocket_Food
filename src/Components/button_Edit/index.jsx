import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { PencilIcon } from "@phosphor-icons/react"

export function Edit({id}) {

    const navigate = useNavigate();

    function handlerEdit(ID) {
        navigate(`/Rocket_Food/Dish/${ID}`)
    }

    return (
        <Container>
            <button onClick={() => handlerEdit(id)}>
                <PencilIcon size={30}/>
            </button>
        </Container>
    ) 
}