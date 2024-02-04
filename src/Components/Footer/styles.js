import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;

    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    color: ${({theme}) => theme.COLORS.Light_300};
    background-color: ${({theme}) => theme.COLORS.Dark_600};

    font-family: "Roboto",sans-serif;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    color: ${({theme}) => theme.COLORS.Light_700};

    > img {
        width: 30px;
        height: 30px;
    }
`