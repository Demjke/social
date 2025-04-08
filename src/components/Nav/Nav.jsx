import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
    <nav>
        <ul className="nav">
            <li className="item">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="item">
                <NavLink to="profile">Profile</NavLink>
            </li>
            <li className="item">
                <NavLink to="messages">Messages</NavLink>
            </li>
            <li className="item">
                <NavLink to="users">Users</NavLink>
            </li>
            <li className="item">
                <NavLink to="news">News</NavLink>
            </li>
            <li className="item">
                <NavLink to="music">Music</NavLink>
            </li>
            <li className="item">
                <NavLink to="login">Login</NavLink>
            </li>
            <li className="item">
                <NavLink to="settings">Settings</NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;
