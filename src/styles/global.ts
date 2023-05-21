import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Nunito&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label{
        font-family: 'Inter', sans-serif;
    }
    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    } 
    :root{
       --color-primary:#27AE60;
       --color-primary-50: #93D7AF;
       --color-secondary: #EB5757;
       --grey-100:#333333;
       --grey-50: #828282;
       --grey-20: #E0E0E0;
       --grey-0: #F5F5F5;

       --Heading1-font: 1.625rem
       --Heading1-weight: 700;

       --Heading2-font: 1.375rem;
       --Heading2-weight: 700;

       --Heading3-font: 1.125rem;
       --Heading3-weight: 700;

       --Heading4-font: 0.875rem;
       --Heading4-weight: 700;

       --Headline-font: 1rem;
       --Headline-weight: 400;

       --Body-font: 0.875rem;
       --Body-weight: 400;

       --Body-600-font: 0.875rem;
       --Body-600-weight: 600;

       --Caption-font: 0.75rem;
       --Caption-weight: 400;
    }
`;
