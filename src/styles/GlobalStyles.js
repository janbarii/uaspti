import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
  }

  html,	body {
    background: rgb(9,9,121);
    background: -moz-linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 0%, rgba(7,56,152,1) 0%, rgba(0,154,255,1) 0%, rgba(0,26,60,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 0%, rgba(7,56,152,1) 0%, rgba(0,154,255,1) 0%, rgba(0,26,60,1) 100%);
    background: linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 0%, rgba(7,56,152,1) 0%, rgba(0,154,255,1) 0%, rgba(0,26,60,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#090979",endColorstr="#001a3c",GradientType=1);
    color: snow;
    margin: 0px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #cacecc #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #cacecc;
    border-radius: 10px;
    border: 2px solid #ffffff;
  }
  
`;

export default GlobalStyles;
