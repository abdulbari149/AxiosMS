import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { supabase } from "../utils/supabase";
import { formTypes } from "../utils/formTypes";
import { Form } from "../styles/form.style";
import { Button, Input, Loading } from ".";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { useGlobal } from "../store/context/global";

const schema = Yup.object({
  name: Yup.string()
    .trim()
    .min(6, "Name field atleast contains 5 character")
    .required("Name is Required"),
  email: Yup.string()
    .trim()
    .email("Invalid Email Format")
    .required("Email is Required"),
  phone_number: Yup.number()
    .min(11, "Phone Number must be atleast 11 digits long")
    .required("Phone Number is required"),
  message: Yup.string().required("Message is Required"),
});

function EmailForm({ mobile }) {
  const tempelateValues = {
    email: "",
    name: "",
    phone_number: "",
    message: "",
  };
  const router = useRouter();
  const [types, setTypes] = useState(() =>
    formTypes(Object.keys(tempelateValues))
  );
  const { dispatch } = useGlobal();

  async function onSubmit(values) {
    dispatch({ type: "FETCHING" });
    const res = await axios.post("/api/email", {
      data: JSON.stringify(values),
    });

    // if (res.status !== 200) throw new Error(res.statusText);
    console.log({ res });
    const { data, error } = await supabase
      .from("emails")
      .insert([res.data])
      .single();

    console.log({ data, error });
    if (!!data) {
      router.push({
        pathname: "/success",
        query: {
          emailSent: data.id,
        },
      });
      dispatch({
        type: "SUCCESS_FETCHING",
        payload: { data },
      });
    }
    if (!!error) {
      dispatch({
        type: "ERROR_FETCHING",
        payload: { error: {} },
      });
    }
  }

  return (
    <Formik
      initialValues={{ ...tempelateValues }}
      initialErrors={{ ...tempelateValues }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form mobile={mobile} onSubmit={handleSubmit}>
          {Object.keys(values).map((key) => (
            <Input
              key={key}
              name={key}
              label={key.replace("_", " ")}
              type={types[key]}
            />
          ))}
          <Button h={6} variant="contained" color="white" type="submit">
            Submit Form
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default EmailForm;
