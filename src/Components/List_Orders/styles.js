import styled from "styled-components";

export const Container = styled.div `
    width: 403px;
    height: 104px;

    display: flex;
    align-items: center;

    padding: 16px 0px 10px 0px;
    gap: 13px;


    > img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }
`

export const Info = styled.div `
    width: 238.12px;
    height: 5.1rem;

    > h1 {
        display: flex;
        align-items: center;
        gap: 1rem;

        font-size: 1.7rem;

        > p {
            font-size: 1rem;
            font-weight: 300;
        }
    }

    > button{
        color: ${({ theme }) => theme.COLORS.Tomato_400};
        font-size: 1.2rem;
    }

`