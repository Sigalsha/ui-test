import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { device } from "./devices";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${colors.LIGHT_GREY};
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  
  button {
    cursor: pointer;
  }
  
  `;
