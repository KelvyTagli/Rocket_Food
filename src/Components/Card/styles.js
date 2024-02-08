import styled from "styled-components";

export const Container = styled.form`
    width: 304px;
    height: 462px;

    display: grid;

    grid-template-areas: "like" "food" "price" "button";
    grid-template-rows: 1.5rem auto;

    padding: 1rem;

    background-color: ${({theme}) => theme.COLORS.Dark_200};
    border-radius: 8px;
`

export const Like = styled.div`
    grid-area: like;
    text-align: end;
`

export const Food = styled.div`
    position: relative;

    display: grid;
    grid-area: food;

    width: 256px;
    height: 176px;
    
    margin: -1rem auto;
    text-align: center;


    > img {
        width: 176px;
        height: 100%;
        border-radius: 50%;
        margin: -1rem auto 1rem;
    }

    > h3 {
        font-size: 22px;
    }

    > p {
        font-size: 13px;
    }
`

export const Price = styled.span`
    grid-area: price;
    text-align: center;

    font-size: 35px;
    color: ${({theme}) => theme.COLORS.Cake_200};
`