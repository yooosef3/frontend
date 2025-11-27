import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

import { HiBellAlert } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Header = ({ collapsed, setCollapsed }) => {
  const {user} = useSelector(state => state.user);
  return (
    <div className="bg-white flex items-center justify-between shadow-md p-5 rounded-md">
      {collapsed ? (
        <RiMenuFoldLine
          onClick={() => setCollapsed(false)}
          className="text-2xl text-gray-600 hover:text-red-600 cursor-pointer duration-200"
        />
      ) : (
        <RiMenuUnfoldLine
          onClick={() => setCollapsed(true)}
          className="text-2xl text-gray-600 hover:text-red-600 cursor-pointer duration-200"
        />
      )}
      <div className="flex items-center gap-5">
        <HiBellAlert className="text-2xl text-gray-600" />
        <Link className="mx-2 text-red-600" to="/profile">
           {user?.name}
        </Link>
      </div>
    </div>
  );
};

export default Header;
