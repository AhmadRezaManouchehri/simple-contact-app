import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Context } from "../../../../../App";
import Input from "../../../../Input/Input";
import styles from "./Add.module.scss";
import { useContext } from "react";
import { nanoid } from "nanoid";

const Add = function () {
    const [states, setStates] = useContext(Context);

    const arrowBackHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            OperationsArea: false,
            Preferences: false,
            Operations: true,
            Account: true,
            Search: false,
            Delete: false,
            Edit: false,
            Add: false,
            tel: true,
        }));
    };

    const phoneNumberChangeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            phoneNumber: target.value,
        }));
    };

    const fullNameChangeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, fullName: target.value }));
    };

    const emailChangeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, email: target.value }));
    };

    const addBtnClickHandler = function () {
        if (states.phoneNumber && states.fullName && states.email) {
            const ID = nanoid();

            localStorage.setItem(
                states.currentActiveAccount,
                JSON.stringify({
                    ...states.data,
                    contactList: [
                        ...states.data.contactList,
                        {
                            phoneNumber: states.phoneNumber,
                            fullName: states.fullName,
                            email: states.email,
                            _id: ID,
                        },
                    ],
                })
            );

            setStates((prevStates) => ({
                ...prevStates,
                phoneNumber: "",
                fullName: "",
                email: "",
                data: {
                    ...states.data,
                    contactList: [
                        ...states.data.contactList,
                        {
                            phoneNumber: states.phoneNumber,
                            fullName: states.fullName,
                            email: states.email,
                            _id: ID,
                        },
                    ],
                },
            }));
        }
    };

    return (
        <div className={styles.add}>
            <IconWrapper
                icon={<HiOutlineArrowNarrowLeft size={18} />}
                clickHandler={arrowBackHandler}
            />

            <div className={styles.newContactInfo}>
                <Input
                    changeHandler={phoneNumberChangeHandler}
                    placeHolder="Type your phone number"
                    value={states.phoneNumber}
                    title="PhoneNumber"
                />
                <Input
                    changeHandler={fullNameChangeHandler}
                    placeHolder="Type your full name"
                    value={states.fullName}
                    title="FullName"
                />
                <Input
                    changeHandler={emailChangeHandler}
                    placeHolder="Type your email"
                    value={states.email}
                    title="Email"
                />
            </div>
            <button className={styles.addBtn} onClick={addBtnClickHandler}>
                Add
            </button>
        </div>
    );
};

export default Add;
