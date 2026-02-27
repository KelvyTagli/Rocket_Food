import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.Light_700 };
    color: ${({ theme }) => theme.COLORS.Light_100 };
    
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${ theme.COLORS.Light_200}`: 'none' };

    border-radius: .5rem;
    width: 118px;


    > button {
        border: none;
        background: none;
    }

    .button-delete {
        display:flex;
        align-items:center;
        color: ${({ theme }) => theme.COLORS.Light_100}; 
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.Carrot_100}; 
    }
    
    > input {
        
        height: 32px;
        width: 90px;

        padding:1rem;


        color: ${({ theme }) => theme.COLORS.Light_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.Light_500};
        }
    }
`