import { useNavigate ,NavLink } from "react-router-dom";

import { IoHomeSharp } from "react-icons/io5";
import { TbClipboardText } from "react-icons/tb";

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
            {adminSidebarItems && adminSidebarItems.map((item) => (
                <NavLink to={item.path} className={({ isActive }) => isActive ? "menu-item active" : "menu-item"} key={item.path}>
                    <div>
                        {item.icon}
                        <p>{item.name}</p>
                    </div>
                </NavLink>
            ))}
            <div onClick={handleProfile}>Profile <br /> page</div>
        </div>
    )
}

export default EmployeeSidebar;