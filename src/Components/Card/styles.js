import styled from "styled-components";

export const Container = styled.form`
    width: 304px;
    height: 462px;

    display: flex;
    flex-direction: column;
    align-items: end;

    gap: 1.5rem;

    padding: 1rem;

    background-color: ${({theme}) => theme.COLORS.Dark_200};
    border-radius: 8px;
`

export const Food = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 256px;
    height: 176px;
    
    margin: -1rem auto;
    text-align: center;


    > img {
        width: 176px;
        height: 100%;
        border-radius: 50%;
        margin: -3rem auto 1rem;
    }

    > h3 {
        font-size: 24px;
    }

    > p {
        font-size: 13px;
    }
`