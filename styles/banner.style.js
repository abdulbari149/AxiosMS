import styled from "styled-components"
import { Container } from "./main.style"


export const BannerText = styled(Container)`
    padding: 0 8%;
    gap: clamp(1.2em, 2vw, 4em);
    position: absolute;
    top: 50%;
    transform: translateY(-50%); 
    max-width: 100vw;
`   