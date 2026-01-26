import { UserPen } from "lucide-react";

const SettingsForm = (): React.JSX.Element => {
  return (
    <>
      <div className="content-wrapper">
        <h2>Account Details</h2>

        <form className="w-full flex flex-col items-start gap-4">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-2">
            <div className="w-full flex flex-col items-start gap-2">
              <label className="text-sm" htmlFor="username">
                Full Name
              </label>
              <input
                className="w-full px-2 py-1 text-sm rounded-md border border-neutral-700 placeholder:text-neutral-500 placeholder:text-sm"
                name="username"
                id="username"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-2 py-1 text-sm rounded-md border border-neutral-700 placeholder:text-neutral-500 placeholder:text-sm"
                name="email"
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-2 py-1 text-sm rounded-md border border-neutral-700 placeholder:text-neutral-500 placeholder:text-sm"
                name="password"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full py-1 rounded-md bg-linear-to-t from-orange-800 to-orange-700 text-sm hover:cursor-pointer hover:opacity-95 transition-all"
          >
            <UserPen className="w-4 h-4" />
            <p className="text-neutral-300 font-medium">Submit</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default SettingsForm;
