import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: clamp(40%, 1% + 2vw , 62.5%);
    }

    body {
        background-color: ${({theme}) => theme.COLORS.Dark_400};
        color: ${({ theme }) => theme.COLORS.Light_100};
    }

    body, input, button, textarea {
        font-family: "Poppins", sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button {
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.Light_100};
    }

    button, a {
        cursor: pointer;
        transition:  filter 0.2s;
    }

    button:hover , a:hover {
        filter: brightness(0.9);
    }
`

