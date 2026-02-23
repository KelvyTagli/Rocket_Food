import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-areas: "header" "button_back" "new_dish" "footer";
    grid-template-rows: auto auto auto 8rem;

    align-items: center;


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

export const Edit_Form = styled.div`
    grid-area: new_dish;

    width: 1120px;
    height: 508px;

    display: grid;
    margin-left: 15rem;
    
    border: 2px solid white;

    
    > .Principal {
        width: 100%;
        height: 80px;
        
        display: flex;
        justify-content: space-between;
        
        
        
        
        > div {
            border: 1px solid white;
            
        }
        
        > .name {
            
            > input {
                 background-color: transparent;
                color: ${({theme}) => theme.COLORS.Light_500};
                border: none;
    
                width: 463px;
                height: 48px;

            }
        }

    }

    > .tags {
        width: 100%;
        height: 80px;

        display: inline;
        gap: 32px;

        border: 1px solid white;
    }

    > .descricao {
        width: 100%;
        height: 204px;

        display: inline;
        gap: 32px;

        border: 1px solid white;
    }


`