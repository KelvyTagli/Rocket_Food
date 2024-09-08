import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: "header" "orders" "footer";
    grid-template-rows: auto auto 7.7rem;

    gap: 30px;

`

export const Orders = styled.div `
    display: grid;
    grid-area: orders;

    grid-template-columns: 1fr 1fr; 

    justify-items: center;

    margin-bottom: 15rem;
`

export const Request = styled.div `
    
    grid-area: orders;
    grid-column: 1;

    display: grid;
    grid-template-areas: "titulo" "info" "price";
    grid-template-rows: auto auto 7.7rem;

    gap: 5rem;

    > .info_orders {
        grid-area: info;
    }

    > h1 {
        grid-area: titulo;
        font-weight: 500;
        line-height: 44.8px;
    }

    .price {
        grid-area: price;
        font-weight: 700;
        font-size: 2rem;
        

        margin-top: 4rem;

        letter-spacing: 1px;
    }
`

export const DishOrders = styled.div `
    width: 444px;
    height: 480px;
`

export const Payment = styled.div `
    width: 444px;
    height: 480px;

    grid-area: payment;
    grid-column: 2;

    display: flex;
    flex-direction: column;

    gap: 2rem;
`