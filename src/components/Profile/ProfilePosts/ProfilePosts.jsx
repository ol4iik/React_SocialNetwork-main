
import style from './ProfilePosts.module.css';

const ProfilePosts = (props) => {
    const postsGenerate = props.posts.map(post => {
        return <div className={style.post}>
            <div>
                <img className={style.userImage} src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg" alt="avatar"/>
                
                <span className={style.message}>{post.message}</span>
                <span className={style.like}>Likes: {post.like}</span>
            </div>
            
        </div>
    });

    const onUpdateNewPostText = (e) => {
        props.updatePostText(e.currentTarget.value);
    }

    const onAddMessage = () => {
        props.addPost();
        props.updatePostText('');
    }

    return <div className={style.profilePosts}>

<div className={style.common}>Write your own post above</div>
        <div className={style.forms}>
            <textarea onChange={onUpdateNewPostText} cols='50' value={props.newPostText}></textarea>
            <button onClick={onAddMessage}>Send</button>
        </div>
        <div className={style.posts}>
            {postsGenerate}
        </div>

    </div>
}
export default ProfilePosts;