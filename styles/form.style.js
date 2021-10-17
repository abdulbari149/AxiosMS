import styled from "styled-components"
import { List } from "./main.style"
import {TextField } from "@mui/material"

export const ContactBox = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    padding: 10px 0px;

`

export const ContactList = styled.div`
    width: 50%;
    ${props => props.mobile && `width: 100%;`}
    flex: 1;
    height: 45rem;
    display:flex;
    flex-direction: column;
    padding: 20px 25px;
    & >  *:last-child{
        margin-top: auto ;
    }

`
export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    color:white;
    ${props => props.mobile && `width: 100%;`}
`

// export const InputField = styled(TextField)`
//     background-color: white;
//     border-radius: .5em;
//     border-top: 4px solid ${props => props.theme.colors.v_blue} !important;
//     border-left: 2px solid ${props => props.theme.colors.v_blue} !important;
//     border-right: 2px solid ${props => props.theme.colors.v_blue} !important;
//     box-sizing: content-box;
//     & label.MuiInputLabel-root{
//         font-size: 1.4em;
//         text-transform: capitalize;
//         top: 5px;
//     }
//     & .MuiFilledInput-root{
//         font-size: 1.6rem !important;
//     }
// `