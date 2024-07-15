import IconWrapper from "../../../../IconWrapper/IconWrapper";
import styles from "./ContactDetails.module.scss";
import propTypes from "prop-types";

const ContactDetails = function (props) {
    return (
        <div className={styles.contactDetails}>
            <IconWrapper icon={props.icon} />
            <p>{props.title}</p>
        </div>
    );
};

ContactDetails.propTypes = {
    title: propTypes.string,
    icon: propTypes.object,
};

export default ContactDetails;
