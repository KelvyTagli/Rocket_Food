import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-areas: "header" "button_back" "new_dish" "footer";
    grid-template-rows: auto auto auto 8rem;

    align-items: center;

    gap: 2rem;


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
            
            > .image-upload-label {
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

                

                width: 364px;
                height: 48px;

                border-color: transparent;

                border-radius: 8px;
            }
         }

    }

    > .ingredientes_preco {

        display: block;
        gap: 32px;

        height: 15rem;

        
        > .tags {
            
            display: flex;
            align-items: center;

            width: auto;
            height: 48px;

            background-color: ${({theme}) => theme.COLORS.Dark_800};

            border-radius: 8px;

            gap: 22px;
        }

        > .price {
             >label {
                display: block;
            }

            > input {
                 background-color: ${({theme}) => theme.COLORS.Dark_800};
                color: ${({theme}) => theme.COLORS.Light_500};
                

                border: none;
                border-radius: 8px;
    
                width: 251px;
                height: 48px;

                padding: 1rem;

            }
        }
    }

    > .descricao {

        width: 100%;
        height: 204px;

        >textarea {
            width: 1120px;
            height: 172px;

            background-color: ${({theme}) => theme.COLORS.Dark_800};
            color: ${({theme}) => theme.COLORS.Light_500};

            border: none;

            padding: 1rem;
        }
        
    }

    > .actions {
        display: flex;
        align-items: center;
        justify-content: right;

        gap: 32px;


        > .delete {
            width: 135px;
            height: 48px;

            border-radius: 8px;

            background-color: ${({theme}) => theme.COLORS.Dark_800};
        }

        > button {
            width: 172px;
            height: 48px;

            background-color: ${({theme}) => theme.COLORS.Tomato_400};

            border-radius: 8px;
            
        }
    }


`