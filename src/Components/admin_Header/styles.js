import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 9rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.Dark_600};
    
`

export const Section = styled.div`
    width: 81.0rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: "Roboto", sans-serif;

    gap: 3.2rem;
`

export const Logo = styled.div`
    width: 196px;
    
    display: flex;

    gap: 1rem;

    > img {
        width: 33px;
        height: 33px;
    }

    > .Titulo {
        display: flex;
        align-items: end;
        flex-direction: column;

        > h2 {
            font-size: 25px;
            font-weight: 500;
        }

        > p {
            font-size: 13px;
            color: ${({theme}) => theme.COLORS.Cake_200};
        }
    }
`

export const Search = styled.div`
    width: 581px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    border-radius: 5px;

    color: ${({theme}) => theme.COLORS.Light_400};
    background-color: ${({theme}) => theme.COLORS.Dark_900};

    > input {
        width: 344px;

        background-color: transparent;
        color: ${({theme}) => theme.COLORS.Light_500};

        border: none;
    }
`

export const Request = styled.div`
    width: 21rem;
    height: 5.6rem;

    margin: auto 3.2rem auto 3.2rem;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: .8rem;

        width: 100%;
        height: 100%;

        background-color: ${({theme}) => theme.COLORS.Tomato_100};
        color: ${({theme}) => theme.COLORS.Light_200};

        border: none;
        border-radius: 5px;

        font-size: 1.6rem;
        font-family: "Poppins", sans-serif;

        padding: 12px 32px;
    }
`

export const Logout = styled.button`
    display: flex;
    align-items: center;

    border: none;
    background: none;

    color: ${({theme}) => theme.COLORS.Light_100};
`