import styles from "./Modal.module.scss";
import { Context } from "../../App";
import { useContext } from "react";
import PropTypes from "prop-types";

const Modal = function (props) {
    const [states, setStates] = useContext(Context);

    const cancelClickHandler = function () {
        setStates((prevState) => ({
            ...prevState,
            deleteAccountModal: false,
            logoutModal: false,
        }));
    };

    const okClickHandler = function () {
        switch (props.action) {
            case "logout":
                setStates((prevState) => ({
                    ...prevState,
                    logoutModal: false,
                    contactApp: false,
                    register: true,

                    OperationsArea: false,
                    Operations: true,
                    Account: true,
                    tel: true,
                }));
                break;
            case "deleteAccount":
                localStorage.removeItem(states.currentActiveAccount);
                setStates((prevState) => ({
                    ...prevState,
                    deleteAccountModal: false,
                    contactApp: false,
                    register: true,

                    OperationsArea: false,
                    Operations: true,
                    Account: true,
                    tel: true,
                }));
                break;
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <p>{props.msg}</p>
                <div className={styles.btnWrapper}>
                    <button onClick={cancelClickHandler}>cancel</button>
                    <button onClick={okClickHandler}>Ok</button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    stateHandler: PropTypes.func,
    action: PropTypes.string,
    msg: PropTypes.string,
};

export default Modal;
