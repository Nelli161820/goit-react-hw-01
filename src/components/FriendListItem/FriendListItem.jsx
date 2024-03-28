import css from "./FriendListItem.module.css";
import clsx from "clsx";


export default function FriendListItem({ avatar, name, isOnline }) { 
    const statusClassNames = clsx(css.name, isOnline ? css.Online : css.Offline)
    return (
        
        <div className={css.block}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.name}> {name}</p>
            <p className={statusClassNames}> {isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )
}