import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 8px;

    color: ${({theme}) => theme.COLORS.Light_400};

    margin: .8rem;
    border-radius: 10px;

    font-family: "Roboto", sans-serif;

    > input {
        height: 45px;
        width: 100%;
        padding: 1.2rem 1.4rem;

        color: ${({theme}) => theme.COLORS.Light_500};
        background-color: ${({theme}) => theme.COLORS.Dark_900};

        border: none;
        border-radius: 5px;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.Light_500};
        }
    }

    > input:focus {
        background-color: transparent;
        border: 1px solid ${({theme}) => theme.COLORS.Light_100};
    }
`