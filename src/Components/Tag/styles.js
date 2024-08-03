import styled from "styled-components";

export const Container = styled.button `
    font-size: 1.2rem;
    padding: .5rem 1.4rem;
    border-radius: 5px;
    margin-right: .6rem;
    color: ${({ theme }) => theme.COLORS.Light_100};
    background-color: ${({ theme }) => theme.COLORS.Dark_1000};
`