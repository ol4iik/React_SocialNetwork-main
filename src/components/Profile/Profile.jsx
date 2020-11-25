import ProfileInfo from './ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo updateStatus={props.updateStatus} {...props} />

            <ProfilePosts  updatePostText={props.updatePostText} {...props} addPost={props.addPost} />
        </div>
    );
}

export default Profile;