import { Container, Content,Items } from "./styles";
import { CaretLeft,CaretRight } from "@phosphor-icons/react";
import { useRef } from "react";

export function Section({title, children}) {
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth 
    }

    const handleRightClick = (e)  => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth 
    }

    return(
        <Container>
            <h2>{title}</h2>
            <Content>
                <button onClick={handleLeftClick}><CaretLeft size={32} /></button>
                    <Items ref={carousel}>
                        {children}
                    </Items>
                <button onClick={handleRightClick}><CaretRight size={32} /></button>
            </Content>
        </Container>
    )
}