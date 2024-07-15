import IconWrapper from "../../../IconWrapper/IconWrapper";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import styles from "./Account.module.scss";
import { Context } from "../../../../App";
import { useContext } from "react";

const Account = function () {
    const [states, setStates] = useContext(Context);

    const preferencesHandler = function () {
        setStates((prevValues) => ({
            ...prevValues,
            OperationsArea: true,
            Preferences: true,
            Operations: false,
            Account: false,
            Search: false,
            Delete: false,
            Edit: false,
            Add: false,
            tel: false,
        }));
    };

    return (
        <div className={styles.Account}>
            <IconWrapper icon={<CgProfile size={18} />} />
            <p>Hi, {states.data.firstName || "dearUser!"}</p>
            <IconWrapper
                icon={<HiOutlineExternalLink size={18} />}
                clickHandler={preferencesHandler}
            />
        </div>
    );
};

export default Account;
