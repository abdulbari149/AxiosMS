import styled from "styled-components"
import { Container } from "./main.style"


export const BannerText = styled.div`
    padding: 0 8%;
    gap: clamp(1.2em, 2vw, 4em);
    position: absolute;
    top: 50%;
    transform: translateY(-50%); 
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction : column;
    align-items: ${props => props.alignItems || "center"};
`   