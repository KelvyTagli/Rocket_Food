import styled from "styled-components";



export const Container = styled.div`
    height: 100vh;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Form = styled.form`
    width: 478px;
    height: 540px;
    padding: 6.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 3.2rem;

    border-radius: 1.6rem;
    background-color: ${({theme}) => theme.COLORS.Dark_700};

    > h1 {
        font-size: 3.2rem;
        color: ${({theme}) => theme.COLORS.Light_100};
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    >img {
        width: 49px;
        height: 47px;
        background-size: cover;
    }
`