import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.sansFont};
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    line-height: 1.7;
    overflow-x: hidden;
    transition: background-color 0.4s ease, color 0.4s ease;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, .serif-heading {
    font-family: ${props => props.theme.serifFont};
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  h1 em, h2 em, h3 em, .italic-accent {
    font-style: italic;
    font-family: ${props => props.theme.serifFont};
    background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.accent} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .mono-badge {
    font-family: ${props => props.theme.monoFont};
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.75rem;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.primaryHover};
  }
`;

export default GlobalStyle;
