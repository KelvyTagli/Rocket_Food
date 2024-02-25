import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-areas: "header" "back" "description" "footer";
    grid-template-rows: 90px 8rem auto 58px;
    
    > button {
        display: flex;
        align-items: center;
        grid-area: back;

        margin-left:23rem ;

        font-size: 2.2rem;
        font-weight: bold;
    }
`

export const Description = styled.div`
    grid-area: description;
    
    display: flex;
    align-items: center;

    gap: 10rem;
    margin-left: 23rem;

    > img {
        width: 350px;
    }

    > div {
        width: 680px;

        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    }
`