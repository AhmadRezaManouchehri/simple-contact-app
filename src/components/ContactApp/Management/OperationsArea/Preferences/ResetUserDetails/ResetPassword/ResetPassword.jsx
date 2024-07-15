import { Context } from "../../../../../../../App";
import Input from "../../../../../../Input/Input";
import { Fragment, useContext } from "react";

const ResetPassword = function () {
    const [states, setStates] = useContext(Context);

    const currentPasswordChangeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            bCurrentPassword: target.value,
            currentPassword: target.value,
        }));
    };

    const newPasswordChangeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            bNewPassword: target.value,
            newPassword: target.value,
        }));
    };

    const retypeNewPasswordChangeHandler = function ({ target }) {
        setStates((prevStates) => ({
            ...prevStates,
            bRetypeNewPassword: target.value,
            retypeNewPassword: target.value,
        }));
    };

    return (
        <Fragment>
            <Input
                changeHandler={currentPasswordChangeHandler}
                placeHolder="Type your current password"
                value={states.currentPassword}
                title="Current password"
                type="password"
                msg={
                    states.currentPasswordNotMatch &&
                    "Not match with current password"
                }
            />
            <Input
                changeHandler={newPasswordChangeHandler}
                placeHolder="Type your new password"
                value={states.newPassword}
                title="New Password"
                type="password"
            />
            <Input
                msg={states.newPasswordNotMatch && "passwords not the same"}
                changeHandler={retypeNewPasswordChangeHandler}
                placeHolder="Retype your new password"
                title="Retype your new password"
                value={states.retypeNewPassword}
                type="password"
            />
        </Fragment>
    );
};

export default ResetPassword;
