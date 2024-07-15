import ResetUserDetails from "./ResetUserDetails/ResetUserDetails";
import UserDetails from "./UserDetails/UserDetails";
import styles from "./Preferences.module.scss";
import Wallpaper from "./Wallpaper/Wallpaper";
import { Context } from "../../../../../App";
import Header from "./Header/Header";
import { useContext } from "react";

const Preferences = function () {
    const [states] = useContext(Context);

    return (
        <div className={styles.Preferences}>
            <Header />
            <Wallpaper />
            {states.UserDetails && <UserDetails />}
            {states.ResetUserDetails && <ResetUserDetails />}
        </div>
    );
};

export default Preferences;
