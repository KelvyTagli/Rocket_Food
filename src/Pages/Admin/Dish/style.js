import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-areas: "header" "button_back" "description" "footer";
    grid-template-rows: auto auto auto 8rem;
    
    > .Button_Back {
        grid-area: button_back;

        width: 100px;
        height: 34px;

        display: flex;
        align-items: center;
        
        margin:1rem 0 0 15rem;

        font-size: 1.8rem;
        font-variant: small-caps;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

        color: ${({theme}) => theme.COLORS.Light_300};
    }
`

export const Description = styled.div`
    grid-area: description;
    
    display: flex;
    align-items: center;

    gap: 10rem;
    margin-left: 23rem;
    margin-top: -12rem;

    > img {
        width: 350px;
        border-radius: 50%;
    }

    > div {
        width: 680px;

        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        font-family: "Poppins",sans-serif;
        color: ${({theme}) => theme.COLORS.Light_300};

        > .title {
            font-size: 40px;
            font-weight: 500;
        }

        > label {
            font-weight: 400;
            font-size: 23px;
        }

        > .edit {
            display: flex;
            justify-content: center;

            width: 131px;
            height: 48px;


            > button {
                width: 100%;

                font-size: 15px;
                border-radius: 8px;

                background-color: ${({theme}) => theme.COLORS.Tomato_100};


            }
        }
    }

`

export const Ingredients = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`