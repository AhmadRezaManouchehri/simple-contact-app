import styles from "./IconWrapper.module.scss";
import propType from "prop-types";

const IconWrapper = function (props) {
    return (
        <div className={styles.iconWrapper}>
            <div onClick={props.clickHandler}></div>
            {props.icon}
        </div>
    );
};

IconWrapper.propType = {
    icon: propType.element,
    clickHandler: propType.func,
};

export default IconWrapper;
