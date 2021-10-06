import React from "react";
import { Field, Label, TextArea, InputField } from "../../styles/form.style";

function Input({ label, type, ...props }) {
  return (
    <Field>
      <Label>{label}</Label>
      {type === "textarea" ? (
        <TextArea {...props}></TextArea>
      ) : (
        <InputField type={type} {...props} />
      )}
    </Field>
  );
}

export default Input;
