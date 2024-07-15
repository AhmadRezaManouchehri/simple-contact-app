import IconWrapper from "../../../../../IconWrapper/IconWrapper";
import { IoLockClosedOutline } from "react-icons/io5";
import { TbArrowsExchange } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { Context } from "../../../../../../App";
import styles from "./UserDetails.module.scss";
import { CiLogout } from "react-icons/ci";
import { useContext } from "react";

const UserDetails = function () {
    const [, setState] = useContext(Context);

    const changeFullNameClickHandler = function () {
        setState((prevStates) => ({
            ...prevStates,
            changeFullNameClicked: true,
            ResetUserDetails: true,
            ResetFullName: true,
            UserDetails: false,
            arrowBack: false,
            save: true,
        }));
    };

    const changePasswordClickHandler = function () {
        setState((prevStates) => ({
            ...prevStates,
            changePasswordClicked: true,
            ResetUserDetails: true,
            ResetPassword: true,
            UserDetails: false,
            arrowBack: false,
            save: true,
        }));
    };

    const logoutClickHandler = function () {
        setState((prevStates) => ({ ...prevStates, logoutModal: true }));
    };

    const deleteAccountClickHandler = function () {
        setState((prevStates) => ({ ...prevStates, deleteAccountModal: true }));
    };

    return (
        <div className={styles.userDetails}>
            <div
                className={styles.changeFullName}
                onClick={changeFullNameClickHandler}
            >
                <IconWrapper icon={<TbArrowsExchange size={18} />} />
                <p>Change full name</p>
            </div>

            <div
                className={styles.changePassword}
                onClick={changePasswordClickHandler}
            >
                <IconWrapper icon={<IoLockClosedOutline size={18} />} />
                <p>Change password</p>
            </div>

            <div className={styles.logout} onClick={logoutClickHandler}>
                <IconWrapper icon={<CiLogout size={18} />} />
                <p>Log out</p>
            </div>

            <div
                className={styles.deleteAccount}
                onClick={deleteAccountClickHandler}
            >
                <IconWrapper icon={<AiOutlineDelete size={18} />} />
                <p>Delete account</p>
            </div>
        </div>
    );
};

export default UserDetails;
