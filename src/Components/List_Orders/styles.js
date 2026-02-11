import styled from "styled-components";

export const Container = styled.div `
    width: 403px;
    height: 104px;

    display: flex;
    align-items: center;

    padding: 16px 0px 10px 10px;
    gap: 40px;


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
        gap: 1.5rem;

        font-size: 1.6rem;

        > h5 {
            display: flow-root;
            font-size: 1.2rem;
            font-weight: 300;
            width: 8rem;
        }
    }

    > button{
        color: ${({ theme }) => theme.COLORS.Tomato_400};
        font-size: 1.2rem;
    }

`