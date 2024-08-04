import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 90px 43rem auto 58px;
    grid-template-areas: "header" "title" "section" "footer"; 
    background-color: ${({theme}) => theme.COLORS.Dark_400};
`