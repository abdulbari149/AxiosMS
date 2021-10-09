import React from "react";
import { InputField } from "../../styles/form.style";
function Input({ label, type, name, ...props }) {
  return (
    <InputField
      variant="filled"
      name={name}
      type={type}
      label={label}
      size="medium"
      multiline={type === "textarea"}
    />
  );
}

export default Input;
