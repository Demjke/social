import { NavLink } from "react-router-dom";
import classes from "../Messages.module.css";

// Компонент Dialog
const Dialog = ({ id, name }) => (
    <div className={classes.dialog}>
        <NavLink to={`/messages/${id}`}>{name}</NavLink>
    </div>
);
export default Dialog;
