import { Outlet } from "react-router";

import Aside from "../components/private/Aside/Aside";

const DashboardLayout = (): React.JSX.Element => {
  return (
    <>
      <div className="flex">
        <Aside />
        <main className="flex-1 ml-64">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
