import styled from "styled-components"

export const Layout = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100vw;
  & > *:not(:first-child) {
    margin-bottom: clamp(8rem, 15%, 12vh);
  }
`;

export const HomeLayout = styled(Layout)`
  grid-template-areas:
    "header"
    "hero"
    "about"
    "portfolio"
    "chooseus"
    "services"
    "marketing"
    "testimonials"
    "contactus"
    "footer"
    "loading"
    ;
`

export const PortfolioLayout = styled(Layout)`
    grid-template-areas:
        "header"
        "work"
        "footer"
    ;
`

export const ResponseLayout = styled(Layout)`
    grid-template-areas:
        "header"
        "response"
        "footer"
    ;
`