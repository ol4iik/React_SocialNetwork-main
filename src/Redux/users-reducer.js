import { usersAPI } from "../api/api";

const FOLL_UNFOLL_USER = 'FOLLOW/UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const IS_FETCHING = 'IS-FETCHING';
const FUPROGRESS = 'FUPROGRESS';

const initial = {
    items: [],
    currentPage: 1,
    totalCount: 50,
    pageSize: 5,
    isFetching: false,
    followingInProgress: []
};


const UsersPage = (state = initial, action) => {
    switch (action.type) {
        case FOLL_UNFOLL_USER:
            {
                return {
                    ...state,
                    items: state.items.map(user => {
                        if (user.id === action.userId) {
                            return {...user, followed: action.isFollowing }
                        }
                        return user;
                    })
                }
            }
        case SET_USERS:
            {
                return {
                    ...state,
                    items: action.items
                }
            }
        case SET_CURRENT_PAGE:
            {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
        case SET_TOTAL_COUNT:
            {
                return {
                    ...state,
                    totalCount: action.totalCount
                }
            }
        case IS_FETCHING:
            {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }
        case FUPROGRESS:
            {
                let state2 = {
                    ...state,
                    followingInProgress: [...state.followingInProgress]
                };

                action.followingInProgress ?
                state2.followingInProgress.push(action.userId) : state2.followingInProgress = state2.followingInProgress.filter(id => id !== action.userId); //filter do not modify the array

                return state2;


            }
        default:
            {
                return state;
            }
    }
}

const followUnfollowUser = (userId, isFollowing) => ({ type: FOLL_UNFOLL_USER, userId, isFollowing });
const setUsers = (items) => ({ type: SET_USERS, items });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
const setIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
const setFollowingInProgress = (followingInProgress, userId) => ({ type: FUPROGRESS, followingInProgress, userId });



export const getUserThunk = (currentPage, pageSize) => async(dispatch) => {
    dispatch(setIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setCurrentPage(currentPage));
    dispatch(setUsers(response.items));
    dispatch(setTotalCount(response.totalCount));
    dispatch(setIsFetching(false));

}

const follUnfollFlow = async(dispatch, userId, apiMethod, action, isFollowing) => {
    dispatch(setFollowingInProgress(true, userId));
    await apiMethod(userId);
    dispatch(action(userId, isFollowing));
    dispatch(setFollowingInProgress(false, userId));
}

export const followThunk = (userId) => async(dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI);
    let action = followUnfollowUser;
    follUnfollFlow(dispatch, userId, apiMethod, action, true);
}

export const unFollowThunk = (userId) => async(dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI);
    let action = followUnfollowUser;
    follUnfollFlow(dispatch, userId, apiMethod, action, false);
}



export default UsersPage;