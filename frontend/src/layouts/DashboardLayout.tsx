import { useState } from "react";
import { Outlet } from "react-router";

import Aside from "../components/private/Aside/Aside";

const DashboardLayout = (): React.JSX.Element => {
  const [asideClose, setAsideClose] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return true;
  });

  return (
    <>
      <div className="flex">
        <Aside close={asideClose} setClose={setAsideClose} />
        <main className={`flex-1 ${asideClose ? "md:ml-16" : "md:ml-56"} transition-all`}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
