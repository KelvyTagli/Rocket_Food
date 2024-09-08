import styled from "styled-components";

export const Container = styled.div `
    width: 530px;
    height: 445px;

    border: 1px solid white;
`

export const Header = styled.div `
    display: grid;

    grid-template-columns: 1fr 1fr;

    justify-items: center;
`

export const Pix = styled.button `
    width: 100%;
    height: 81px;

    padding: 12px 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
    grid-column: 1;

    border-bottom: 1px solid white ;
`

export const Credit = styled.button `
    width: 100%;
    height: 81px;

    padding: 12px 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
    grid-column: 2;

    border-bottom: 1px solid white ;
`