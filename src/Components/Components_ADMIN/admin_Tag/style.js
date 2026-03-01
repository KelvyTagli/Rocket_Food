import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center; 
  border-radius: 0.5rem;
  padding-right: 1rem; 

  
background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.Light_700};
  
  color: ${({ theme }) => theme.COLORS.Light_100};
  
  border: ${({ theme, $isNew }) => 
    $isNew ? `2px dashed ${theme.COLORS.Light_200}` : 'none'};

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.Light_100}; 
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.Light_500}; 
  }
  
  > input {
    height: 32px;
    width: 100%; 
    max-width: 150px; 

    padding: 1rem;
    border: none;
    background: transparent;
    
    color: ${({ theme }) => theme.COLORS.Light_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light_500};
    }

    &:focus {
      outline: none;
    }
  }
`;