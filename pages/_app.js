import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AuthProvider } from "../store/context/auth";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Raleway";
  }
  html {
    font-size: 62.5%
  }
  :root{
    --space: 20px;
  }

  body{
    width: 100vw;
    overflow-x: hidden;
  }
`;

const theme = {
  colors: {
    black: "#111315",
    v_black: "#111315",
    blue: "#2D46AA",
    v_blue: "#00A3D9",
    white: "#f8f8f8",
    defaultTextColor: "#000000",
  },
  breakPoints: {
    x_large: {
      min: 1600,
    },
    large: {
      min: 1024,
      max: 1600,
    },
    medium: {
      min: 768,
      max: 1023,
    },
    small: {
      min: 450,
      max: 766,
    },
    x_small: {
      max: 449,
    },
  },
  background: {
    gradient: `linear-gradient(
      119.59deg,
      #141313 30.04%,
      rgba(20, 19, 19, 0.1) 111%
    )`,
    default: "white"
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
