import { LOG_IN, SIGN_OUT, SIGN_UP, SET_COOKIE } from "../constant";
import { supabase } from "../../utils/supabase";
import { compare, hash } from "bcryptjs";

async function signUp(state, { name, email, password, role }) {
  const {
    data,
    session,
    error: userError,
    user,
  } = await supabase.auth.signUp({
    email,
    password,
  });
  console.log({ userError, session });

  const { employee, error: employeeError } = await supabase
    .from("employee")
    .insert([{ user_id: user.id, name, role }]);

  const error = new Error(userError || employeeError);
  return {
    ...state,
    error,
    user: {
      id: user.id,
      name,
      email,
      role,
    },
  };
}

async function logIn(state, { email, password }) {
  
  const { session, user, error } = await supabase.auth.signIn({
    email,
    password,
  });

  console.log({ error })
  return {
    ...state,
    authenticated: true,
    error,
    user: {
      id: user?.id,
      email: user.email,
      role: user.role,
    },
  };
}

async function signOut(state) {
  const { error } = await supabase.auth.signOut();
  return {
    ...state,
    error,
    user: {
      id: null,
      email: null,
      password: null,
    },
    authenticated: false,
  };
}

async function setCookie(state) {}

export const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_UP:
      return signUp(state, action.payload.data);
    case LOG_IN:
      return logIn(state, action.payload.data);
    case SIGN_OUT:
      return signOut(state);
    default:
      return state;
  }
};
