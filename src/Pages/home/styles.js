import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px 128px auto 6.4rem;
    grid-template-areas: "header" "title" "meals" "footer"; 
    background-color: ${({theme}) => theme.COLORS.Dark_400};
`