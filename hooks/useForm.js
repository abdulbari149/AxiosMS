import { useState } from "react";

export function useForm(data) {
  const [formData, setFormData] = useState({
    ...data,
  });
  const handleChange = (event) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };
  return [formData, setFormData, handleChange]
}
