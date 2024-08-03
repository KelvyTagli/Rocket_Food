import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-areas: "header" "buttonBack" "description" "footer";
    grid-template-rows: 8rem auto auto 6.5rem;
    
    > button {
        width: 100px;
        height: 34px;

        display: flex;
        align-items: center;
        grid-area: buttonBack;

        margin:3rem 0 0 23rem;

        font-size: 1.8rem;
        font-weight: bold;
    }
`

export const Description = styled.div`
    grid-area: description;
    
    display: flex;
    align-items: center;

    gap: 10rem;
    margin-left: 23rem;
    margin-top: -12rem;

    > img {
        width: 350px;
    }

    > div {
        width: 680px;

        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        font-family: "Poppins",sans-serif;
        color: ${({theme}) => theme.COLORS.Light_300};

        > h1 {
            font-size: 40px;
            font-weight: 500;
        }

        > p {
            font-weight: 400;
            font-size: 23px;
        }
    }
`

export const ingredients = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`