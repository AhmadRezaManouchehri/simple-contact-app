import { Fragment, useContext, useEffect, useRef } from "react";
import styles from "./Register.module.scss";
import { Context } from "../../App";

const Register = function () {
    const [states, setStates] = useContext(Context);

    useEffect(() => {
        const accounts = Object.keys(localStorage);
        accounts.length &&
            accounts.forEach((item) => {
                localStorage.setItem(
                    item,
                    JSON.stringify({
                        ...JSON.parse(localStorage.getItem(item)),
                        isActive: false,
                    })
                );
            });
    }, []);

    const target = useRef();

    function signInSpanOnClickAction() {
        target.current.classList.remove(styles.fieldsOnSignUp);
        setStates((prevValue) => ({
            ...prevValue,
            visibility: !prevValue.visibility,
        }));
    }

    function signUpSpanOnClickAction() {
        target.current.classList.add(styles.fieldsOnSignUp);
        setStates((prevValue) => ({
            ...prevValue,
            visibility: !prevValue.visibility,
        }));
    }

    function gmailChangeHandler({ target }) {
        setStates((prevValue) => ({ ...prevValue, gmail: target.value }));
    }

    function passwordChangeHandler({ target }) {
        setStates((prevValue) => ({ ...prevValue, password: target.value }));
    }

    function confirmPasswordChangeHandler({ target }) {
        setStates((prevValue) => ({
            ...prevValue,
            confirmPassword: target.value,
        }));
    }

    function signUpBtnMouseOverHandler({ target }) {
        if (states.gmail && states.password && states.confirmPassword) {
            target.classList.remove(styles.btnOnMouseOver);
        } else {
            target.classList.add(styles.btnOnMouseOver);
        }
    }

    function signInBtnMouseOverHandler({ target }) {
        if (states.gmail && states.password) {
            target.classList.remove(styles.btnOnMouseOver);
        } else {
            target.classList.add(styles.btnOnMouseOver);
        }
    }

    function showWarning(state, ms = 1e3) {
        const key = Object.keys(state)[0];

        setStates((prevValue) => ({
            ...prevValue,
            ...state,
        }));

        setTimeout(() => {
            setStates((prevValue) => ({
                ...prevValue,
                [key]: "",
            }));
        }, ms);
    }

    function signUpBtnClickHandler() {
        if (states.gmail && states.password && states.confirmPassword) {
            if (!/[a-zA-Z0-9][a-zA-Z0-9]*@gmail\.com/.test(states.gmail)) {
                showWarning({ invalidGmail: "Invalid gmail" });
            } else if (localStorage.getItem(states.gmail)) {
                showWarning(
                    {
                        userExistenceMessage:
                            "A user with this gmail already exist.",
                    },
                    2e3
                );
            } else if (!(states.password === states.confirmPassword)) {
                showWarning({ passwordNotMatch: "password not match" });
            } else {
                localStorage.setItem(
                    states.gmail,
                    JSON.stringify({
                        password: states.password,
                        contactList: [],
                        isActive: true,
                        firstName: "",
                        lastName: "",
                    })
                );

                setStates((prevValue) => ({
                    ...prevValue,
                    currentActiveAccount: states.gmail,
                    confirmPassword: "",
                    visibility: false,
                    contactApp: true,
                    register: false,
                    password: "",
                    gmail: "",
                    data: {
                        password: states.password,
                        contactList: [],
                        isActive: true,
                        firstName: "",
                        lastName: "",
                    },
                }));
            }
        }
    }

    function signInBtnClickHandler() {
        if (states.gmail && states.password) {
            if (!/[a-zA-Z0-9][a-zA-Z0-9]*@gmail\.com/.test(states.gmail)) {
                showWarning({ invalidGmail: "Invalid gmail" });
            } else if (!localStorage.getItem(states.gmail)) {
                showWarning(
                    {
                        userExistenceMessage:
                            "A user with this gmail doesn't exist.",
                    },
                    2e3
                );
            } else if (
                !(
                    JSON.parse(localStorage.getItem(states.gmail)).password ===
                    states.password
                )
            ) {
                showWarning({ incorrectPassword: "Incorrect password" });
            } else {
                localStorage.setItem(
                    states.gmail,
                    JSON.stringify({
                        ...JSON.parse(localStorage.getItem(states.gmail)),
                        isActive: true,
                    })
                );

                setStates((prevValue) => ({
                    ...prevValue,
                    currentActiveAccount: states.gmail,
                    contactApp: true,
                    register: false,
                    password: "",
                    gmail: "",
                    data: {
                        ...JSON.parse(localStorage.getItem(states.gmail)),
                        isActive: true,
                    },
                }));
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <p>{states.userExistenceMessage}</p>
                <div className={styles.logo}></div>
            </div>

            <div className={styles.fields} ref={target}>
                <div>
                    <input
                        placeholder="Type your gmail..."
                        onChange={gmailChangeHandler}
                        value={states.gmail}
                        type="text"
                    />
                    <p>{states.invalidGmail}</p>
                </div>

                <div>
                    <input
                        placeholder="Type your password..."
                        onChange={passwordChangeHandler}
                        value={states.password}
                        type="password"
                    />
                    <p>{states.incorrectPassword}</p>
                </div>

                {states.visibility && (
                    <div>
                        <input
                            placeholder="Type your password again..."
                            onChange={confirmPasswordChangeHandler}
                            value={states.confirmPassword}
                            type="password"
                        />
                        <p>{states.passwordNotMatch}</p>
                    </div>
                )}
            </div>

            <div className={styles.action}>
                <span>
                    {states.visibility ? (
                        <Fragment>
                            <span onClick={signInSpanOnClickAction}>
                                Already have an account?
                            </span>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <span onClick={signUpSpanOnClickAction}>
                                No account?
                            </span>
                        </Fragment>
                    )}
                </span>
                {states.visibility ? (
                    <button
                        onMouseOver={signUpBtnMouseOverHandler}
                        onClick={signUpBtnClickHandler}
                    >
                        sign up
                    </button>
                ) : (
                    <button
                        onMouseOver={signInBtnMouseOverHandler}
                        onClick={signInBtnClickHandler}
                    >
                        sign in
                    </button>
                )}
            </div>
        </div>
    );
};

export default Register;
