import ContactsDetailsWrapper from "./ContactsDetailsWrapper/ContactsDetailsWrapper";
import styles from "./WithContacts.module.scss";
import { Context } from "../../../../App";
import { useContext } from "react";

const WithContacts = function () {
    const [states, setStates] = useContext(Context);

    const copyPhoneNumberClickHandler = function () {
        navigator.clipboard.writeText(states.details.phoneNumber);
    };

    const copyFullNameClickHandler = function () {
        navigator.clipboard.writeText(states.details.fullName);
    };

    const copyEmailClickHandler = function () {
        navigator.clipboard.writeText(states.details.email);
    };

    const copyIDClickHandler = function () {
        navigator.clipboard.writeText(states.details._id);
    };

    const wrapperRightClickHandler = function ({
        currentTarget,
        clientX,
        clientY,
        target,
    }) {
        if (target !== currentTarget) {
            const contactsDetails = states.data.contactList[target.id];
            setStates((prevStates) => ({
                ...prevStates,
                details: contactsDetails,
                index: target.id,
                position: {
                    x: clientX - currentTarget.getBoundingClientRect().left,
                    y: clientY - currentTarget.getBoundingClientRect().top,
                },
            }));
        }
    };

    const withContactsClickHandler = function () {
        setStates((prevStates) => ({ ...prevStates, popUp: false }));
    };

    const popUpRightClickHandler = function (eventObject) {
        eventObject.stopPropagation();
        eventObject.preventDefault();
    };

    const popUpClickHandler = function (eventObject) {
        eventObject.stopPropagation();
        eventObject.preventDefault();

        if (eventObject.target !== eventObject.currentTarget) {
            setStates((prevStates) => ({ ...prevStates, popUp: false }));
        }
    };

    const withContactsRightClickHandler = function (eventObject) {
        eventObject.preventDefault();
    };

    return (
        <div
            onContextMenu={wrapperRightClickHandler}
            className={styles.wrapper}
        >
            {states.popUp && (
                <div
                    style={{
                        left: `${states.position.x}px`,
                        top: `${states.position.y}px`,
                    }}
                    onContextMenu={popUpRightClickHandler}
                    onClick={popUpClickHandler}
                    className={styles.popUp}
                >
                    <p onClick={copyPhoneNumberClickHandler}>CopyPhoneNumber</p>
                    <p onClick={copyFullNameClickHandler}>CopyFullName</p>
                    <p onClick={copyEmailClickHandler}>CopyEmail</p>
                    <p onClick={copyIDClickHandler}>CopyID</p>
                </div>
            )}

            <div
                onContextMenu={withContactsRightClickHandler}
                onClick={withContactsClickHandler}
                className={styles.WithContacts}
            >
                {states.data.contactList.map((items, index) => (
                    <ContactsDetailsWrapper
                        phoneNumber={items.phoneNumber}
                        fullName={items.fullName}
                        email={items.email}
                        key={index}
                        id={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default WithContacts;
