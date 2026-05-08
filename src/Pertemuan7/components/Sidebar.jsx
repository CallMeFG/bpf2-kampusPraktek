import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaShoppingBag, FaUsers, FaPlus, FaExclamationTriangle, FaLock, FaBan } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
                    Sedap<b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400 font-barlow">
                    Modern Admin Dashboard
                </span>
            </div>
            
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
                        <NavLink to="/" end className={menuClass}>
                            <MdDashboard className="mr-4 text-xl" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders" className={menuClass}>
                            <AiOutlineShoppingCart className="mr-4 text-xl" />
                            <span>Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/customers" className={menuClass}>
                            <IoIosPeople className="mr-4 text-xl" />
                            <span>Customers</span>
                        </NavLink>
                    </li>

                    {/* Menu Error Pages (bagian latihan) */}
                    <li className="pt-4">
                        <p className="text-xs text-gray-400 uppercase font-semibold px-4 mb-2">
                            Error Pages
                        </p>
                    </li>
                    <li>
                        <NavLink to="/error/400" className={menuClass}>
                            <FaExclamationTriangle className="mr-4 text-xl" />
                            Error 400
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/error/401" className={menuClass}>
                            <FaLock className="mr-4 text-xl" />
                            Error 401
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/error/403" className={menuClass}>
                            <FaBan className="mr-4 text-xl" />
                            Error 403
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="text-gray-600 flex items-center">Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" className="w-20 rounded-full" src="https://i.pinimg.com/736x/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg" />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}
