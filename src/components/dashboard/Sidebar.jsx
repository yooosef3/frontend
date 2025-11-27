/* eslint-disable react/prop-types */

import { FaClipboardList, FaHome } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { GiClawHammer } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { HiMiniUsers } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";
import logo from "../../assets/images/Law-logo-design-template-on-transparent-background-PNG.png";
import { useSelector } from "react-redux";

const Sidebar = ({ collapsed }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const userMenu = [
    {
      id: 1,
      name: "خانه",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "نوبت ها",
      path: "/dashboard/appointments",
      icon: <FaClipboardList />,
    },
    {
      id: 3,
      name: "وکیل شو",
      path: "/dashboard/apply-lawyer",
      icon: <GoLaw />,
    },
  ];

  const adminMenu = [
    {
      id: 1,
      name: "خانه",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      id: 3,
      name: "کاربران",
      path: "/dashboard/userslist",
      icon: <HiMiniUsers />,
    },
    {
      id: 3,
      name: "لیست وکلا",
      path: "/dashboard/lawyerslist",
      icon: <GiClawHammer />,
    },
  ];
  const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu;
  return (
    <>
      <div className="flex border-b pb-5 border-gray-400 flex-col items-center gap-1">
        <img
          className={`"grayscale ${collapsed ? "h-12 w-12" : "h-40 w-40"} "`}
          src={logo}
          alt="logo"
        />
        <h2 className={`"font-bold ${collapsed && "hidden "}"`}>وکیل خوب</h2>
      </div>
      <div className="space-y-3 mt-5">
        {menuToBeRendered.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              to={item.path}
              key={item.id}
              className={`flex items-center ${
                collapsed && "justify-center px-1"
              } hover:bg-yellow-500 ${
                isActive ? "bg-yellow-500 text-white" : "text-gray-300"
              } hover:text-white cursor-pointer duration-200 gap-2 px-2 py-3 rounded-md`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className={`font-bold ${collapsed && "hidden"} w-full`}>
                {item.name}
              </span>
            </Link>
          );
        })}
        <div
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
          className="flex items-center hover:bg-yellow-500 text-gray-300 hover:text-white cursor-pointer duration-200 gap-2 px-2 py-3 rounded-md"
        >
          <span className="text-2xl">
            <RiLogoutCircleLine />
          </span>
          <Link
            className={`font-bold ${collapsed && "hidden"} w-full`}
            to="/login"
          >
            خروج
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
