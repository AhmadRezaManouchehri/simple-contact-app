import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Context } from "../../../../../App";
import styles from "./Edit.module.scss";
import { useContext } from "react";

const Edit = function () {
    const [states, setStates] = useContext(Context);

    const arrowBackHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            editByPhoneNumber: false,
            editByMsg: "edit by ID",
            editByFullName: false,
            OperationsArea: false,
            editByEmail: false,
            Preferences: false,
            Operations: true,
            editById: true,
            Account: true,
            Search: false,
            Delete: false,
            Edit: false,
            Add: false,
            tel: true,
        }));
    };

    const changeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            targetContactID: target.value,
        }));
    };

    const newPhoneNumberChangeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            newPhoneNumber: target.value,
        }));
    };

    const newFullNameChangeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            newFullName: target.value,
        }));
    };

    const newEmailChangeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, newEmail: target.value }));
    };

    const editBtnClickHandler = function () {
        if (states.targetContactID) {
            const contactList = states.data.contactList;

            const [targetContact] = contactList.filter(
                (items) => items._id === states.targetContactID
            );

            const indexOfTargetContact = contactList.findIndex(
                (items) => items._id === states.targetContactID
            );

            const [modifiedTargetContact] = [targetContact].map((items) => ({
                ...items,
                phoneNumber: states.newPhoneNumber || targetContact.phoneNumber,
                fullName: states.newFullName || targetContact.fullName,
                email: states.newEmail || targetContact.email,
            }));

            contactList[indexOfTargetContact] = modifiedTargetContact;

            localStorage.setItem(
                states.currentActiveAccount,
                JSON.stringify({
                    ...JSON.parse(
                        localStorage.getItem(states.currentActiveAccount)
                    ),
                    contactList,
                })
            );

            setStates((prevStates) => ({
                ...prevStates,
                targetContactID: "",
                newPhoneNumber: "",
                newFullName: "",
                newEmail: "",
                data: {
                    ...prevStates.data,
                    contactList,
                },
            }));
        }
    };

    return (
        <div className={styles.edit}>
            <IconWrapper
                icon={<HiOutlineArrowNarrowLeft size={18} />}
                clickHandler={arrowBackHandler}
            />

            <input
                placeholder="Type contact ID"
                onChange={changeHandler}
                value={states.targetContactID}
                type="text"
                autoFocus
            />

            <div className={styles.newData}>
                <input
                    onChange={newPhoneNumberChangeHandler}
                    placeholder="Type new phoneNumber"
                    value={states.newPhoneNumber}
                />

                <input
                    onChange={newFullNameChangeHandler}
                    placeholder="Type new fullName"
                    value={states.newFullName}
                />

                <input
                    onChange={newEmailChangeHandler}
                    placeholder="Type new email"
                    value={states.newEmail}
                />
            </div>

            <button className={styles.editBtn} onClick={editBtnClickHandler}>
                Edit
            </button>
        </div>
    );
};

export default Edit;
