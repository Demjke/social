import { Field } from "redux-form";
import styles from "./FormsControls.module.css";

export const FormControl = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Textarea = props => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const Input = props => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};

export const createField = (placeholder, className, name, validators, component, props = {}) => (
    <Field
        className={className}
        placeholder={placeholder}
        component={component}
        name={name}
        validate={validators}
        {...props}
    />
);
