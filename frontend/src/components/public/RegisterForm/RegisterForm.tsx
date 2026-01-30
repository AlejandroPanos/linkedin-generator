import { Link } from "react-router";
import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";
import { AxiosError } from "axios";

import { register } from "../../../helpers/helpers";
import { useAuth } from "../../../hooks/useAuth";

const RegisterForm = () => {
  const { dispatch } = useAuth();

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: async (data) => {
      dispatch({ type: "REGISTER", payload: data });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
      console.log("Register --> Form validation error");
      return;
    }

    const user = { name, email, password };

    registerMutation.mutate(user);
  };
  return (
    <>
      <div className="auth-form">
        <h2>Register</h2>
        <p>Create your account</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Your Name</label>
          <input type="text" id="username" name="username" placeholder="John Doe" required />

          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="********" required />

          {registerMutation.error && (
            <p className="text-red-500">
              {registerMutation.error instanceof AxiosError
                ? registerMutation.error?.response?.data?.error
                : "An error occurred"}
            </p>
          )}

          <div className="auth-form-btn-wrapper">
            <button disabled={registerMutation.isPending} type="submit">
              {registerMutation.isPending ? "Creating Account..." : "Create Account"}
            </button>
            <div className="flex-row-gap-2">
              <p className="text-neutral-500">Already have an account?</p>
              <Link to="/login" className="underline text-orange-600 hover:opacity-95">
                Log In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
