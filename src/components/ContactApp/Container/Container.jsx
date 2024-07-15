import { Fragment, useContext, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import Management from "../Management/Management";
import styles from "./Container.module.scss";
import { Context } from "../../../App";
import Modal from "../../Modal/Modal";

const Container = function () {
    const [states, setStates] = useContext(Context);

    useEffect(() => {
        setStates((prevStates) => ({
            ...prevStates,
            canIBeVisible: true,
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            {states.logoutModal && (
                <Modal
                    msg="Are you suer you want to log out?"
                    action="logout"
                />
            )}

            {states.deleteAccountModal && (
                <Modal
                    msg="Are you suer you want to delete your account?"
                    action="deleteAccount"
                />
            )}

            <div className={styles.container}>
                {states.canIBeVisible && <Management />}
                {states.canIBeVisible && <ContactList />}
            </div>
        </Fragment>
    );
};

export default Container;
