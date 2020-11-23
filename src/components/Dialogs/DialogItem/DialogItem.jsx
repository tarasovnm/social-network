import s from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <li className={s.dialog} key={props.id}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;