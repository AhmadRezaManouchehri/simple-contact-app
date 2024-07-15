import Preferences from "./Preferences/Preferences";
import styles from "./OperationsArea.module.scss";
import { Context } from "../../../../App";
import Delete from "./Delete/Delete";
import Search from "./Search/Search";
import { useContext } from "react";
import Edit from "./Edit/Edit";
import Add from "./Add/Add";

const OperationsArea = function () {
    const [states] = useContext(Context);

    return (
        <div className={styles.OperationsArea}>
            {states.Add && <Add />}
            {states.Search && <Search />}
            {states.Edit && <Edit />}
            {states.Delete && <Delete />}
            {states.Preferences && <Preferences />}
        </div>
    );
};

export default OperationsArea;
