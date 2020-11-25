import Pagination from "../common/pagination/pagination";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import style from "./User/User.module.css";

const Users = (props) => {

    return <div>
        <div className={style.pagination}>
            <Pagination {...props} />
        </div>

        {props.isFetching
            ? <Preloader />
            : (<div>

                <div>
                    {props.items.map(user => <User followingInProgress={props.followingInProgress} follow={props.follow} unFollow={props.unFollow} user={user} />)}

                </div>
            </div>
            )}
    </div>
}
export default Users;

