import styled from "styled-components";

export const Container = styled.div `
    grid-area: section;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    
    margin: 4rem auto;
    width: 1122px;
    height: 529.72px;

    > h2 {
        color: ${({theme}) => theme.COLORS.Light_300};

        font-family: "Poppins", sans-serif;
        font-weight: 400;
        letter-spacing: 1px;
    }
`

export const Content = styled.div`
    display: flex;
    
    width: 100%;

    margin: 2rem auto;

    gap: 27px;
`