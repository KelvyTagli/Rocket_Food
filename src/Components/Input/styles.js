import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.Dark_700};
    color: ${({theme}) => theme.COLORS.Light_400};

    margin: .8rem;
    border-radius: 10px;

    font-family: "Roboto", sans-serif;

    > p {
        color: ${({theme}) => theme.COLORS.Light_400};
    }

    > input {
        height: 53px;
        width: 100%;

        padding: 1.2rem;
        color: ${({theme}) => theme.COLORS.Light_500};
        background: transparent;
        border: 1px solid ${({theme}) => theme.COLORS.Light_100};
        border-radius: 5px;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.Light_500};
        }
    }
`