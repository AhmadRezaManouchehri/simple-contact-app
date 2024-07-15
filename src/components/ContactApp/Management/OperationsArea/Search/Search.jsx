import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import IconWrapper from "../../../../IconWrapper/IconWrapper";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { Context } from "../../../../../App";
import styles from "./Search.module.scss";
import { useContext } from "react";

const Search = function () {
    const [states, setStates] = useContext(Context);

    const arrowBackHandler = function () {
        const contacts = JSON.parse(
            localStorage.getItem(states.currentActiveAccount)
        );

        setStates((prevStates) => ({
            ...prevStates,
            searchByMsg: "search by fullName",
            searchByPhoneNumber: false,
            searchByFullName: true,
            OperationsArea: false,
            searchByEmail: false,
            Preferences: false,
            Operations: true,
            data: contacts,
            Account: true,
            Search: false,
            Delete: false,
            searchBy: "",
            Edit: false,
            Add: false,
            tel: true,
        }));
    };

    const searchByFullNameClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            searchByMsg: "search by fullName",
            searchByFullName: true,
        }));
    };

    const searchByEmailClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            searchByMsg: "search by email",
            searchByEmail: true,
        }));
    };

    const searchByPhoneNumberClickHandler = function () {
        setStates((prevStates) => ({
            ...prevStates,
            searchByMsg: "search by phoneNumber",
            searchByPhoneNumber: true,
        }));
    };

    const changeHandler = function ({ target }) {
        setStates((prevStates) => ({ ...prevStates, searchBy: target.value }));
    };

    const search = function (msg) {
        let newContactList;

        switch (msg) {
            case "phoneNumber":
                newContactList = states.data.contactList.filter(
                    (items) => items.phoneNumber === states.searchBy
                );

                break;
            case "fullName":
                newContactList = states.data.contactList.filter(
                    (items) => items.fullName === states.searchBy
                );

                break;
            case "email":
                newContactList = states.data.contactList.filter(
                    (items) => items.email === states.searchBy
                );

                break;
            default:
                break;
        }

        setStates((prevStates) => ({
            ...prevStates,
            searchBy: "",
            data: {
                ...prevStates.data,
                contactList: newContactList,
            },
        }));
    };

    const resetBtn = function () {
        const contacts = JSON.parse(
            localStorage.getItem(states.currentActiveAccount)
        );

        setStates((prevStates) => ({
            ...prevStates,
            data: contacts,
        }));
    };

    const searchBtn = function () {
        if (states.searchByPhoneNumber) search("phoneNumber");
        if (states.searchByFullName) search("fullName");
        if (states.searchByEmail) search("email");
    };

    return (
        <div className={styles.search}>
            <IconWrapper
                icon={<HiOutlineArrowNarrowLeft size={18} />}
                clickHandler={arrowBackHandler}
            />

            <div className={styles.searchBy}>
                <IconWrapper
                    clickHandler={searchByFullNameClickHandler}
                    icon={<IoPersonOutline size={18} />}
                />
                <IconWrapper
                    clickHandler={searchByEmailClickHandler}
                    icon={<HiOutlineMail size={18} />}
                />
                <IconWrapper
                    clickHandler={searchByPhoneNumberClickHandler}
                    icon={<HiOutlinePhone size={18} />}
                />
            </div>

            <input
                placeholder={states.searchByMsg}
                onChange={changeHandler}
                value={states.searchBy}
                type="text"
                autoFocus
            />

            <div className={styles.btnWrapper}>
                <button className={styles.resetBtn} onClick={resetBtn}>
                    Reset
                </button>

                <button className={styles.searchBtn} onClick={searchBtn}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
