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
    

    
    > .Principal {
        width: 100%;
        height: 80px;
        
        display: flex;
        justify-content: space-between;

        
        > .img {
            
            > button {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;

                width: 229px;
                height: 48px;


                background-color: ${({theme}) => theme.COLORS.Dark_800};
                color: ${({theme}) => theme.COLORS.Light_100};

                border-radius: 8px;
                
            }
        }
        
        
        > .name {
            >label {
                display: block;
            }

            > input {
                 background-color: ${({theme}) => theme.COLORS.Dark_800};
                color: ${({theme}) => theme.COLORS.Light_500};
                border: none;

                border-radius: 8px;
    
                width: 463px;
                height: 48px;

            }
        }

         > .category {

            >label {
                display: block;
            }

            > .select {
                background-color: ${({theme}) => theme.COLORS.Dark_800};
                color: ${({theme}) => theme.COLORS.Light_100};

                border-radius: 8px;

                width: 364px;
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