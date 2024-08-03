import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 3.3rem;

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