import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { Context } from "../../../../../App";
import { MdNumbers } from "react-icons/md";
import styles from "./Delete.module.scss";
import { useContext } from "react";

const Delete = function () {
    const [states, setStates] = useContext(Context);

    const arrowBackHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by ID",
            deleteByPhoneNumber: false,
            deleteByFullName: false,
            OperationsArea: false,
            deleteByEmail: false,
            Preferences: false,
            deleteById: true,
            Operations: true,
            deleteBy: "",
            Account: true,
            Search: false,
            Delete: false,
            Edit: false,
            Add: false,
            tel: true,
        }));
    };

    const deleteByIdClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by ID",
            deleteByPhoneNumber: false,
            deleteByFullName: false,
            deleteByEmail: false,
            deleteById: true,
        }));
    };

    const deleteByFullNameClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by fullName",
            deleteByPhoneNumber: false,
            deleteByFullName: true,
            deleteByEmail: false,
            deleteById: false,
        }));
    };

    const deleteByEmailClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by email",
            deleteByPhoneNumber: false,
            deleteByFullName: false,
            deleteByEmail: true,
            deleteById: false,
        }));
    };

    const deleteByPhoneNumberClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            deleteByMsg: "delete by phoneNumber",
            deleteByPhoneNumber: true,
            deleteByFullName: false,
            deleteByEmail: false,
            deleteById: false,
        }));
    };

    const changeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, deleteBy: target.value }));
    };

    const del = function (condition) {
        const contactList = states.data.contactList;

        let newContactList;

        switch (condition) {
            case "deleteByID":
                newContactList = contactList.filter(
                    (items) => !(items._id === states.deleteBy)
                );

                break;
            case "deleteByFullName":
                newContactList = contactList.filter(
                    (items) => !(items.fullName === states.deleteBy)
                );

                break;
            case "deleteByEmail":
                newContactList = contactList.filter(
                    (items) => !(items.email === states.deleteBy)
                );

                break;
            case "deleteByPhoneNumber":
                newContactList = contactList.filter(
                    (items) => !(items.phoneNumber === states.deleteBy)
                );

                break;
            default:
                break;
        }

        localStorage.setItem(
            states.currentActiveAccount,
            JSON.stringify({
                ...JSON.parse(
                    localStorage.getItem(states.currentActiveAccount)
                ),
                contactList: newContactList,
            })
        );

        setStates((prevStates) => ({
            ...prevStates,
            deleteBy: "",
            data: {
                ...prevStates.data,
                contactList: newContactList,
            },
        }));
    };

    const delBtnClickHandler = function () {
        if (states.deleteBy) {
            if (states.deleteByPhoneNumber) del("deleteByPhoneNumber");
            if (states.deleteByFullName) del("deleteByFullName");
            if (states.deleteByEmail) del("deleteByEmail");
            if (states.deleteById) del("deleteByID");
        }
    };

    return (
        <div className={styles.delete}>
            <IconWrapper
                icon={<HiOutlineArrowNarrowLeft size={18} />}
                clickHandler={arrowBackHandler}
            />

            <div className={styles.deleteBy}>
                <IconWrapper
                    clickHandler={deleteByIdClickHandler}
                    icon={<MdNumbers size={18} />}
                />

                <IconWrapper
                    clickHandler={deleteByFullNameClickHandler}
                    icon={<IoPersonOutline size={18} />}
                />
                <IconWrapper
                    clickHandler={deleteByEmailClickHandler}
                    icon={<HiOutlineMail size={18} />}
                />
                <IconWrapper
                    clickHandler={deleteByPhoneNumberClickHandler}
                    icon={<HiOutlinePhone size={18} />}
                />
            </div>

            <input
                placeholder={states.deleteByMsg}
                onChange={changeHandler}
                value={states.deleteBy}
                type="text"
                autoFocus
            />

            <button className={styles.delBtn} onClick={delBtnClickHandler}>
                Delete
            </button>
        </div>
    );
};

export default Delete;
