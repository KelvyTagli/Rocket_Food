import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 10rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${({theme}) => theme.COLORS.Dark_600};
    
    
    padding: 2.4rem 12.3rem;
`

export const Section = styled.div`
    width: 81.0rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    width: 196px;

    display: flex;
    align-items: center;

    gap: 1.5rem;

    font-family: "Roboto", sans-serif;

    > img {
        width: 30px;
        height: 30px;
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
    width: 21.6rem;
    height: 5.6rem;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: .8rem;

        width: 100%;
        height: 100%;

        background-color: ${({theme}) => theme.COLORS.Tomato_200};
        color: ${({theme}) => theme.COLORS.Light_200};

        border: none;
        border-radius: 5px;

        font-size: 1.6rem;
        font-family: "Poppins", sans-serif;
    }
`

export const Logout = styled.button`
    display: flex;
    align-items: center;

    border: none;
    background: none;

    color: ${({theme}) => theme.COLORS.Light_100};
`