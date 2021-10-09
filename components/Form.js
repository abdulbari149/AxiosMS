import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useForm } from "../hooks/useForm";
import { supabase } from "../utils/supabase";
import { FormStyles } from "../styles/form.style";
import { Button, Input, Loading } from ".";
import axios from "axios";

function Form() {
  const [formData, handleChange] = useForm({
    email: "",
    name: "",
    phoneNo: "",
    message: "",
  });

  const [formDataTypes, setFormDataTypes] = useState(() =>
    returnTypes(Object.keys(formData))
  );
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function returnTypes(keys) {
    const types = {};
    for (let key of keys) {
      if (key === "email") types[key] = "email";
      else if (key === "password") types[key] = "password";
      else if (key === "phoneNo") types[key] = "number";
      else if (key === "message") types[key] = "textarea";
      else types[key] = "text";
    }
    return types;
  }


  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const res = await axios.post("/api/email", {
      data: JSON.stringify(formData),
    });

    const { data, error } = await supabase
      .from("emails")
      .insert([res.data])
      .single();

    if (!!data) {
      setLoading(false);
      router.push("/success");
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <Input
          name={key}
          label={key}
          value={formData[key]}
          onChange={handleChange}
          type={formDataTypes[key]}
        />
      ))}
      <Button
        height={6}
        variant="contained"
        color="white"
        type="submit"
      >
        Submit Form
      </Button>
    </FormStyles>
  );
}

export default Form;
