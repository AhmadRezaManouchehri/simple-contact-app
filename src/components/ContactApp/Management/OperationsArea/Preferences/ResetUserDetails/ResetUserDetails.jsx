import ResetPassword from "./ResetPassword/ResetPassword";
import ResetFullName from "./ResetFullName/ResetFullName";
import styles from "./ResetUserDetails.module.scss";
import { Context } from "../../../../../../App";
import { useContext } from "react";

const ResetUserDetails = function () {
    const [states] = useContext(Context);

    return (
        <div className={styles.resetUserDetails}>
            {states.ResetFullName && <ResetFullName />}
            {states.ResetPassword && <ResetPassword />}
        </div>
    );
};

export default ResetUserDetails;
