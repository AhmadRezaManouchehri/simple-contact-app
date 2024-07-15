import WithNoContacts from "./WithNoContacts/WithNoContacts";
import WithContacts from "./WithContacts/WithContacts";
import { Context } from "../../../App";
import { useContext } from "react";

const ContactList = function () {
    const [states] = useContext(Context);

    return !states.data.contactList.length ? (
        <WithNoContacts />
    ) : (
        <WithContacts />
    );
};

export default ContactList;
