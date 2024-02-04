import styled from "styled-components";
import Mask from "../../assets/Maskgroup.jpg"

export const Container = styled.div`
    grid-area: title;

    width: 1100px;
    height: 260px;

    border-radius: 8px;
    background:linear-gradient(360deg, #040d11 0%, #091E26 100% ) ;

    margin: 160px auto;

    align-items: center;
    justify-content: space-around;
    display: flex;
`

export const Image = styled.div`
    width: 656px;
    height: 412px;

    display: flex;
    align-items: stretch;

    margin: 0px 0px 120px -70px;

    background: url(${Mask}) no-repeat center center;
    background-size: cover;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 50px auto;

    > h1 {
        font-size: 35px;
        font-family: "Poppins" sans-serif;
        letter-spacing: 1px;
        font-weight: 400;
    }

    > p {
        font-size: 1.6rem;
        font-family: "Roboto", sans-serif;
        color: ${({theme}) => theme.COLORS.Light_400};
    }
`