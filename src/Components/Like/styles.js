import styled from "styled-components"

export const Container = styled.div`
    grid-area: like;

    width: 100%;
    height: 30px;

    display: flex;
    align-items: stretch;
    justify-content: end;
    
    > button {
        color: ${({theme}) => theme.COLORS.Light_100};
        background-color: transparent;
        border: none;
    }
`