import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login } from "../../../store/auth-reducer";
import { requared } from "../../../utils/validators";
import { createField, Input } from "../../common/FormsControls/FormsControls";
import style from "../../common/FormsControls/FormsControls.module.css";
import classes from "./Login.module.css";

const LoginForm = ({ handleSubmit, error }) => (
    <form className={classes.form} onSubmit={handleSubmit}>
        {createField("Email", classes.input, "email", [requared], Input)}
        {createField("Password", classes.input, "password", [requared], Input, { type: "password" })}
        <div className={classes.label}>
            {createField(null, classes.checkbox, "rememberMe", null, Input, { type: "checkbox" })} remember me
        </div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <button className={classes.button}>Login</button>
    </form>
);

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
    const onSubmit = formData => props.login(formData.email, formData.password, formData.rememberMe);

    if (props.isAuth) return <Navigate to={"/profile"} />;

    return (
        <div className={classes.login}>
            <h1 className={classes.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = state => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps, { login })(Login);
