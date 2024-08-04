import styled from "styled-components";

export const Container = styled.div`
    width: 304px;
    height: 462px;

    display: grid;

    grid-template-areas: "like" "food" "price" "button";
    grid-template-rows: 1.6rem;

    padding: 1rem;

    background-color: ${({theme}) => theme.COLORS.Dark_200};
    border-radius: 8px;

    > .Food {
        display: grid;
        grid-area: food;

        width: 256px;
        height: 176px;
        
        margin: 2.6rem auto;
        text-align: center;

        color: ${({theme}) => theme.COLORS.Light_100};


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
            color: ${({theme}) => theme.COLORS.Light_500};
        }
    }
`

export const Food = styled.a`
    position: relative;

    
`

export const Price = styled.span`
    grid-area: price;
    text-align: center;

    font-size: 30px;
    color: ${({theme}) => theme.COLORS.Cake_200};

    margin-top: 2.5rem;
`

export const Amount = styled.div`
    grid-area: button;

    margin: .1rem auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

    width: 208px;
    height: 48px;
`

export const Counter = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    > button {
        background-color: transparent;
        border: none;

        color: ${({theme}) => theme.COLORS.Light_100};
    }

    > span{
        font-size: 20px;
        letter-spacing: 1px;
        font-family: "Roboto",sans-serif;
    }
`