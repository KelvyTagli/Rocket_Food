import { Container,Price } from "./style";
import { api } from "../../Services/api";
import { useState } from "react";

import { Edit } from "../button_Edit";

export function Card_admin({cover, title,description,price,id}) {

    const dishUrl = cover ? `${api.defaults.baseURL}/photoFiles/${cover}` : cover;

    const [coverDish] = useState(dishUrl);

    return(
        <Container>
            <Edit id={id}/>
            <div  className='Food'>
                <img src={coverDish} alt="Foto do Prato" />
                <h3>{title} {'>'}</h3>
                <p>{description}</p>
            </div>
            <Price>R$ {price}</Price>
        </Container>
    )
}