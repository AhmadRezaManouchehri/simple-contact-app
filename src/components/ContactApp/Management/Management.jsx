import OperationsArea from "./OperationsArea/OperationsArea";
import Operations from "./Operations/Operations";
import styles from "./Management.module.scss";
import Account from "./Account/Account";
import { Context } from "../../../App";
import { useContext } from "react";

const Management = function () {
    const [states] = useContext(Context);

    return (
        <div className={styles.management}>
            {states.tel && <div className={styles.telWrapper}></div>}
            {states.OperationsArea && <OperationsArea />}
            {states.Operations && <Operations />}
            {states.Account && <Account />}
        </div>
    );
};

export default Management;
