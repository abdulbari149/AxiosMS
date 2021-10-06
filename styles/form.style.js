import styled from "styled-components";
import { List } from "./main.style"
export const FormStyles = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 50%;
  max-width: 100%;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 10px;
  letter-spacing: .8px;
  line-height: 1.5;
  color: white;
`;
export const TextArea = styled.textarea``;
export const InputField = styled.input``;



export const Col = styled.div`


`

export const ContactList = styled(List)`
  /* background-color: inherit; */
  height: 60rem;
  width: 50%;
  padding: 30px 50px;
`