import styles from "./WithNoContacts.module.scss";
import { FaHeartBroken } from "react-icons/fa";

const WithNoContacts = function () {
    return (
        <div className={styles.WithNoContacts}>
            <div className={styles.noContactMsg}>
                <p>No contacts found.</p>
                <FaHeartBroken size={18} />
            </div>
        </div>
    );
};

export default WithNoContacts;
