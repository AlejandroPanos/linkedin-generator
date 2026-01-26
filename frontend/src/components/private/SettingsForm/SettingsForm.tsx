import { UserPen } from "lucide-react";

import "./SettingsForm.css";

const SettingsForm = (): React.JSX.Element => {
  return (
    <>
      <div className="content-wrapper">
        <h2>Account Details</h2>

        <form className="settings-form">
          <div className="input-group-wrapper">
            <div className="input-wrapper">
              <label htmlFor="username">Full Name</label>
              <input name="username" id="username" type="text" placeholder="John Doe" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" placeholder="johndoe@gmail.com" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input name="password" id="password" type="password" placeholder="********" />
            </div>
          </div>
          <button type="submit">
            <UserPen className="w-4 h-4" />
            <span>Submit</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default SettingsForm;
