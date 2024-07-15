import ContactDetails from "../ContactsDetails/ContactDetails";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import styles from "./ContactsDetailsWrapper.module.scss";
import { IoPersonOutline } from "react-icons/io5";
import { Context } from "../../../../../App";
import propTypes from "prop-types";
import { useContext } from "react";

const ContactsDetailsWrapper = function (props) {
    const [, setStates] = useContext(Context);

    const coverContextMenuHandler = (eventObject) => {
        eventObject.preventDefault();
        setStates((prevStates) => ({ ...prevStates, popUp: true }));
    };

    const coverClickHandler = () => {
        setStates((prevStates) => ({ ...prevStates, popUp: false }));
    };

    return (
        <div className={styles.ContactsDetailsWrapper}>
            <div
                onContextMenu={coverContextMenuHandler}
                onClick={coverClickHandler}
                className={styles.cover}
                id={props.id}
            ></div>

            <ContactDetails
                icon={<IoPersonOutline size={18} />}
                title={props.fullName}
            />

            <ContactDetails
                icon={<HiOutlineMail size={18} />}
                title={props.email}
            />

            <ContactDetails
                icon={<HiOutlinePhone size={18} />}
                title={props.phoneNumber}
            />
        </div>
    );
};

ContactsDetailsWrapper.propTypes = {
    phoneNumber: propTypes.string,
    fullName: propTypes.string,
    email: propTypes.string,
    id: propTypes.number,
};

export default ContactsDetailsWrapper;
