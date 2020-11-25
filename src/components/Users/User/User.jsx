import { NavLink } from "react-router-dom";
import style from "./User.module.css";

const User = (props) => {
    
    return (
        <div>
            <div className={style.person}>
                <div className={style.user}>
                    <NavLink to={`/profile/${props.user.id}`}>
                    <img className={style.photo}
                        src={props.user.photos.small
                            ? props.user.photos.small
                            : 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                        } alt="avatar" />
                    </NavLink>
                    
                    <span className={style.nickName}>{props.user.name}</span>

                    <span className={style.status}>
                        <span>Status:</span>
                        {props.user.status
                            ? <span>{props.user.status}</span>
                            : <span> ----- </span>
                        }
                    </span>



                </div>

                <div className={style.button}>
                    <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={ () => {props.user.followed ? props.unFollow(props.user.id): props.follow(props.user.id) }}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
                </div>
            </div>

        </div>
    );
}
export default User;

