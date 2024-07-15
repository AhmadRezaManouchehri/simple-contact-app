import styles from "./Input.module.scss";
import propType from "prop-types";

const Input = function (props) {
    return (
        <div className={styles.inputWrapper}>
            <span className={styles.title}>{props.title}</span>
            <input
                placeholder={props.placeHolder}
                onChange={props.changeHandler}
                className={styles.input}
                value={props.value}
                type={props.type || "text"}
            />
            {<p className={styles.msg}>{props.msg}</p>}
        </div>
    );
};

Input.propType = {
    placeHolder: propType.string,
    changeHandler: propType.func,
    title: propType.string,
    type: propType.string,
    value: propType.any,
};

export default Input;
