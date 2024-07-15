import Container from "./components/ContactApp/Container/Container";
import Register from "./components/Register/Register";
import { createContext, useState } from "react";

const Context = createContext(null);

const App = function () {
    const [states, setStates] = useState({
        deleteAccountModal: false,
        logoutModal: false,

        OperationsArea: false,
        Operations: true,
        Account: true,
        tel: true,

        ResetUserDetails: false,
        ResetPassword: false,
        ResetFullName: false,
        Preferences: false,
        UserDetails: true,
        arrowBack: true,
        Search: false,
        Delete: false,
        Edit: false,
        save: false,
        Add: false,

        phoneNumber: "",
        fullName: "",
        email: "",

        contactApp: false,
        register: true,

        userExistenceMessage: "",
        incorrectPassword: "",
        passwordNotMatch: "",
        confirmPassword: "",
        visibility: false,
        invalidGmail: "",
        password: "",
        gmail: "",

        currentActiveAccount: "",

        firstName: "",
        lastName: "",

        bFirstName: "",
        bLastName: "",

        currentPassword: "",
        newPassword: "",
        retypeNewPassword: "",

        bCurrentPassword: "",
        bNewPassword: "",
        bRetypeNewPassword: "",

        changeFullNameClicked: false,
        changePasswordClicked: false,

        currentPasswordNotMatch: false,
        newPasswordNotMatch: false,

        popUp: false,

        index: 0,

        position: { x: 0, y: 0 },

        details: { fullName: "", email: "", phoneNumber: "", _id: 0 },

        searchByMsg: "search by fullName",
        searchByPhoneNumber: false,
        searchByFullName: true,
        searchByEmail: false,
        searchBy: "",

        deleteByMsg: "delete by ID",
        deleteByPhoneNumber: false,
        deleteByFullName: false,
        deleteByEmail: false,
        deleteById: true,
        deleteBy: "",

        newPhoneNumber: "",
        newFullName: "",
        newEmail: "",

        data: {},

        canIBeVisible: false,

        targetContactID: "",
    });

    return (
        <Context.Provider value={[states, setStates]}>
            {states.contactApp && <Container />}
            {states.register && <Register />}
        </Context.Provider>
    );
};

export { Context, App };
