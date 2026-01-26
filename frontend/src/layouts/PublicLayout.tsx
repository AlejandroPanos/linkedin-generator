import { Outlet } from "react-router";

import Navbar from "../components/public/Navbar/Navbar";

const PublicLayout = (): React.JSX.Element => {
  return (
    <>
      <div className="px-16 py-8 flex flex-col items-center gap-12">
        <Navbar />
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PublicLayout;
