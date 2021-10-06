import React from "react";
import { Input } from "../../components/shared/Input";
import { useForm } from "../../hooks/useForm";
import { useAuth } from "../../store/context/auth";
import { SIGN_UP } from "../../store/constant"
const login = () => {
  const [formData, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const { auth, dispatch } = useAuth();

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({
      type: SIGN_UP,
      payload: {
        data: {
          ...formData,
        },
      },
    });
    console.log({ auth });
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>SignIn Form</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          type="text"
        />
        <Input
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
        <Input
          name="role"
          label="Role"
          value={formData.role}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default login;
