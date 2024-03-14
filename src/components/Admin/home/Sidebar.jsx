import { useNavigate ,NavLink } from "react-router-dom";

import { IoHomeSharp } from "react-icons/io5";
import { TbClipboardText } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";

import './Sidebar.scss'

const AdminSidebar = () => {
    const navigate = useNavigate();
    const handleProfile = () => {
        navigate('/adminProfilePage')
    }
    const adminSidebarItems = [
        {
            icon:<IoHomeSharp />,
            name:"Home",
            path:"/adminHome"
        },
        {
            icon:<TbClipboardText />,
            name:"Attendance Reports",
            path:""
        },
        {
            icon:<FaUsers />,
            name:"Employee Management",
            path:"/employeeManagement"
        },
        {
            icon:<CiBank />,
            name:"Financial Management",
            path:""
        }
    ]

    return (
        <div className="adminSidenav">
            <div className="adminSidenavMenus">
                {adminSidebarItems && adminSidebarItems.map((item) => (
                    <NavLink to={item.path} className={({ isActive }) => isActive ? "menu-item active" : "menu-item"} key={item.path}>
                        <div className="adminSidenavMenuItems">
                            {item.icon}
                            <p>{item.name}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
            <div onClick={handleProfile} className="adminSidenavMenusProfile"><FaUserAlt />Profile</div>
        </div>
    )
}

export default AdminSidebar;