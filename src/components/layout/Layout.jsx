import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="p-5 h-[100vh]">
      <div className="flex h-full gap-5">
        <aside
          className={`bg-gradient-to-b from-yellow-800 via-yellow-600 to-yellow-300 shadow-md top-10 rounded-md ${
            collapsed ? "w-fit p-2 pt-5" : "w-[300px] p-5"
          } text-white`}
        >
          <Sidebar collapsed={collapsed} />
        </aside>
        <div className="flex-1 space-y-5">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
