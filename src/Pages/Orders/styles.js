import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    > .Button_Back {

        width: 100px;
        height: 34px;

        display: flex;
        align-items: center;

        margin: 4rem 0 0 4rem;

        font-size: 1.8rem;

        color: ${({theme}) => theme.COLORS.Light_300};
    }
`

export const Orders = styled.div `
    display: grid;

    grid-template-columns: 1fr 1fr; 
    gap: 100px;

    justify-items: center;
`

export const Request = styled.div `
    width: 444px;
    height: 480px;

    grid-area: orders;
    grid-column: 1;
    border: 1px solid white;
`

export const Payment = styled.div `
    width: 444px;
    height: 480px;

    grid-area: payment;
    grid-column: 2;
    border: 1px solid white;
`