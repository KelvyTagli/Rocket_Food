import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 104px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 32px;

    padding: 24px 123px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.9rem;
    color: ${({theme}) => theme.COLORS.Light_700};

    > img {
        width: 30px;
        height: 30px;
    }
`

export const Search = styled.div `
    padding: 4.4rem 6.4rem 0;

    > img {
        width: 20px;
        height: 20px;
    }
`