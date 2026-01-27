import { UserPen } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

import "./SettingsForm.css";
import { useAuth } from "../../../hooks/useAuth";
import { updateProfile } from "../../../helpers/helpers";

const SettingsForm = (): React.JSX.Element => {
  const { user, dispatch } = useAuth();

  const updateMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      dispatch({ type: "UPDATE_USER", payload: data.user });
      toast.success("Profile updated!");
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
      console.log("Update Profile --> Form validation error");
      return;
    }

    const updatedProfile = { name, email, password };
    updateMutation.mutate(updatedProfile);
  };

  return (
    <>
      <div className="content-wrapper">
        <h2>Account Details</h2>

        <form onSubmit={handleSubmit} className="settings-form">
          <div className="input-group-wrapper">
            <div className="input-wrapper">
              <label htmlFor="username">Full Name</label>
              <input name="username" id="username" type="text" defaultValue={user?.name} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" defaultValue={user?.email} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input name="password" id="password" type="password" placeholder="********" />
            </div>
          </div>
          <button disabled={updateMutation.isPending} type="submit">
            <UserPen className="w-4 h-4" />
            <span>{updateMutation.isPending ? "Submitting..." : "Submit"}</span>
          </button>
        </form>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              padding: "10px",
            },
            success: {
              style: {
                background: "#032e15",
                color: "#00c951",
                border: "1px solid #00c951",
              },
              iconTheme: {
                primary: "#00c951",
                secondary: "#032e15",
              },
            },
            error: {
              style: {
                background: "#460809",
                color: "#ff6467",
                border: "1px solid #ff6467",
              },
              iconTheme: {
                primary: "#ff6467",
                secondary: "#460809",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default SettingsForm;
