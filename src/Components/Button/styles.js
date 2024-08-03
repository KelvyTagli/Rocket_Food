import styled from "styled-components";

export const Container = styled.button `
    width: 100%;

    display: flex;
    gap: .8rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.2rem 3.2rem;
    border-radius: 5px;
    border: none;

    color: ${({theme}) => theme.COLORS.Light_100};
    background-color: ${({theme}) => theme.COLORS.Tomato_100};

    &:disabled {
        opacity: 0.5;
    }
`