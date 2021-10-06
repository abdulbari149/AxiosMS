import React from "react";
import { Input } from "../../components/shared/Input";
import { useForm } from "../../hooks/useForm";
import { LOG_IN } from "../../store/constant";
import { useAuth } from "../../store/context/auth";
import { supabase } from "../../utils/supabase";
import Link from "next/link";
const login = () => {
  const [{ email, password }, handleChange] = useForm({
    email: "",
    password: "",
  });
  const { auth, dispatch } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: LOG_IN,
      payload: {
        data: {
          email,
          password,
        },
      },
    }); 
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <h1>Login Form</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <Input
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          type="password"
        />
        <button style={{ width: "100%" }} type="submit">
          Login
        </button>
      </form>
      <button>
        <Link href="/dashboard/signup">
          <span style={{ color: "black" }}>Register Now</span>
        </Link>
      </button>
    </div>
  );
};

export default login;
