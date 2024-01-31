import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.Dark_700};
    color: ${({theme}) => theme.COLORS.Light_400};

    margin: .8rem;
    border-radius: 10px;

    > input {
        height: 53px;
        width: 100%;

        padding: 1.2rem;
        color: ${({theme}) => theme.COLORS.Light_500};
        background: transparent;
        border: 1px solid ${({theme}) => theme.COLORS.Light_100};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.Light_500};
        }
    }
`