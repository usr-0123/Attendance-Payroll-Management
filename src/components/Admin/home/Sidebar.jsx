import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { TbClipboardText } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";

import "./Sidebar.scss";

const AdminSidebar = () => {
  const location = useLocation();

  const adminSidebarItems = [
    {
      icon: <IoHomeSharp />,
      name: "Home",
      path: "/adminHome",
    },
    {
      icon: <TbClipboardText />,
      name: "Attendance Reports",
      path: "/attendanceReport",
    },
    {
      icon: <FaUsers />,
      name: "Employee Management",
      path: "/employeeManagement",
    },
    {
      icon: <CiBank />,
      name: "Financial Management",
      path: "/financialManagement",
    },
  ];

  return (
    <div className="adminSidenav">
      <div className="adminSidenavMenus">
        {adminSidebarItems.map((item) => (
          <NavLink
            to={item.path}
            className="menu-item"
            activeClassName="active"
            key={item.path}
          >
            <div className="adminSidenavMenuItems" activeClassName="active">
              {item.icon}
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink
        to="/adminProfilePage"
        className="adminSidenavMenusProfile"
        activeClassName="active"
      >
        <FaUserAlt />
        Profile
      </NavLink>
    </div>
  );
};

export default AdminSidebar;
