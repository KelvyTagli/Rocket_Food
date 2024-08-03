import { Container } from "./styles";
import { Heart } from "@phosphor-icons/react";

import { useState, useEffect } from "react";

export function Like() {
    const [liked, setLiked] = useState(false)

    function hadlerClick() {
        setLiked(!liked)
    }

    useEffect(() => {
        if(liked) {
            const timer = setTimeout(() => {
                setLiked(false)
            }, 1000)

            return () => clearTimeout(timer)
        }
    }, [liked])

    return(
        <Container>
            <button className={`botao-like ${liked ? 'liked': ''}`} onClick={hadlerClick} type="button">
                {liked ? <Heart size={30} color="#f60404" weight="fill" /> : <Heart size={30}/> }
            </button>
        </Container>
    )
}