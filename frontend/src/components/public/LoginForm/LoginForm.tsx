import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";

import { useAuth } from "../../../hooks/useAuth";
import { login } from "../../../helpers/helpers";

const LoginForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch({ type: "LOGIN", payload: data });
      navigate("/dashboard");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      console.log("Log In --> Form validation error");
      return;
    }

    const user = { email, password };

    loginMutation.mutate(user);
  };

  return (
    <>
      <div className="auth-form">
        <h2>Log In</h2>
        <p>Log into your account</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="********" />

          <div className="auth-form-btn-wrapper">
            <button type="submit">Log In</button>
            <div className="flex-row-gap-2">
              <p className="text-neutral-500">Don't have an account yet?</p>
              <Link to="/register" className="underline text-orange-600 hover:opacity-95">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
