import { Link, NavLink } from "react-router-dom";
import logo from "../../images/header/logo.avif";
import "./Header.css";

const Header = ({ isAuth, login, logout }) => (
    <header className="header">
        <Link to="/" className="logo">
            <img src={logo} alt="HeaderLogo" />
        </Link>
        <div className="login">
            {isAuth ? (
                <div>
                    {login} - <button onClick={logout}>Log out</button>
                </div>
            ) : (
                <NavLink className="login-link" to={"/login"}>
                    Login
                </NavLink>
            )}
        </div>
        <div className="contacts">
            <a href="tel:+79372531018" className="phone">
                8 (937) 253 10 18
            </a>
            <a href="mailto:Demjke64@gmail.com" className="mail">
                Demjke64@gmail.com
            </a>
        </div>
    </header>
);

export default Header;
