import { Outlet } from "react-router";

import Navbar from "../components/public/Navbar/Navbar";

const PublicLayout = (): React.JSX.Element => {
  return (
    <>
      <div className="mx-auto px-16 py-8 max-w-300 flex flex-col items-center">
        <Navbar />
        <main className="w-full mt-56">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PublicLayout;
