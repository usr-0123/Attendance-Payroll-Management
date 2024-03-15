import { useNavigate ,NavLink } from "react-router-dom";

import { IoHomeSharp } from "react-icons/io5";
import { TbClipboardText } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";

import './EmployeeSidebar.scss'

const EmployeeSidebar = () => {
    const navigate = useNavigate();
    const handleProfile = () => {
        navigate('/employeeHome/employeeProfile')
    }
    const adminSidebarItems = [
        {
            icon:<IoHomeSharp />,
            name:"Home",
            path:"/employeeHome"
        },
        {
            icon:<TbClipboardText />,
            name:"Payroll",
            path:"/employeeHome/employeePayroll"
        }
    ]

    return (
        <div className="sidenav">
            <div>
            {adminSidebarItems && adminSidebarItems.map((item) => (
                <NavLink to={item.path} className={({ isActive }) => isActive ? "menu-item active" : "menu-item"} key={item.path}>
                    <div className="sidenavItems">
                        {item.icon}
                        <p>{item.name}</p>
                    </div>
                </NavLink>
            ))}
            </div>
            <div className="employeeProfile" onClick={handleProfile}>
            <FaUserAlt />
            <span>Profile</span>
            </div>
        </div>
    )
}

export default EmployeeSidebar;