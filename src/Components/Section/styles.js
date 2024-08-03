import styled from "styled-components";

export const Container = styled.div `
    grid-area: section;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    
    margin: 4rem auto;
    width: 1300px;
    height: 529.72px;

    gap: 1.7rem;

    > h2 {
        color: ${({theme}) => theme.COLORS.Light_300};

        font-family: "Poppins", sans-serif;
        font-weight: 400;
        letter-spacing: 1px;
    }
`

export const Content = styled.div`
   display: flex;
   align-items: center;
    
    width: 100%;
    gap: 1.7rem;

    >::-webkit-scrollbar {
            display: none;
        }
`

export const Items = styled.div`
        display: flex;

        overflow-x: auto;
        scroll-behavior: smooth;
        
        gap: 27px;
`