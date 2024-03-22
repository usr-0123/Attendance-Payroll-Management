import { useNavigate ,NavLink , useLocation} from "react-router-dom";

import { IoHomeSharp } from "react-icons/io5";
import { TbClipboardText } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";

import './EmployeeSidebar.scss'

const EmployeeSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // const handleProfile = () => {
        // navigate('/employeeHome/employeeProfile')
    // }

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
            <div className="sidenavMenus">
            {adminSidebarItems.map((item) => (
                <NavLink 
                    to={item.path} 
                    className="menu-item"
                    activeClassName="active"
                    key={item.path}
                >
                    <div className="sidenavItems" activeClassName="active">
                        {item.icon}
                        <p>{item.name}</p>
                    </div>
                </NavLink>
            ))}
            </div>
            <NavLink
                to="/employeeHome/employeeProfile"
                className="employeeProfile"
                activeClassName="active"
                >
                <FaUserAlt />
                Profile
            </NavLink>
        </div>
    )
}

export default EmployeeSidebar;