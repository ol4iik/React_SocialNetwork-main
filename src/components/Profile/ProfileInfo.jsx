import Preloader from '../common/Preloader/Preloader';
import style from './Profile.module.css';
import ProfileStatus from './ProfileStatus';



const ProfileInfo = (props) => {

   return props.profile  ?
    ( <div>
        <div className={style.profile}>
            <div>
                <img className={style.userImage} src={props.profile.photos.small ? props.profile.photos.small : "https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg"} alt="avatar" />
                <span className={style.nickname}>{props.profile.fullName}</span>
                {props.id === props.userIdURL
                ? <ProfileStatus 
                    updateStatus={props.updateStatus}
                    userStatus={props.userStatus}/>
                : <div title='Only read'  className={style.status + ' ' + style.statusText}>
                Status : {props.userStatus ? props.userStatus : 'No status'}
            </div>
            }
                
            </div>
        </div>
    </div>)
    : <Preloader/>;
}
export default ProfileInfo;