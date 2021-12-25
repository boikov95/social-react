import { API } from "../api/api";
import { updateStatusUser } from "../component/Utils/updateStatusUser";

const Follow_ = 'Follow';
const UnFollof_ = 'UnFollof';
const unloadState_ = 'unloadState';
const userPage_ = 'userPage';
const countUser_ = 'countUser';
const isFetching_ = 'isFetching';
const isToogle_ = 'isToogle';

export const FollowSucsess = (userId) => ({ type: Follow_, userId: userId });
export const UnFollofSucsess = (userId) => ({ type: UnFollof_, userId: userId });
export const unloadState = (unload) => ({ type: unloadState_, unload: unload });
export const unloadUserPage = (tekPage) => ({ type: userPage_, tekPage: tekPage });
export const unloadCountUser = (count) => ({ type: countUser_, count: count });
export const isFetching = (toogle) => ({ type: isFetching_, toogle: toogle });
export const isToogleData = (toogle, userId) => ({ type: isToogle_, toogle, userId });

let initialState = {
    users: [],
    count: 5,
    tekPage: 1,
    countUser: 20,
    isFetching: true,
    isToogle: []
}

let usersreducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow_:
            return {
                ...state,
                users: updateStatusUser(state.users, action.userId, "id", {followed: true})  
        }
        case UnFollof_:
            return {
                ...state,
                users: updateStatusUser(state.users, action.userId, "id", {followed: false})                
            }
        case unloadState_:
            return {
                ...state,
                users: [...action.unload]
            }
        case userPage_:
            return {
                ...state,
                tekPage: action.tekPage
            }
        case countUser_:
            return {
                ...state,
                countUser: action.count
            }
        case isFetching_:
            return {
                ...state,
                isFetching: action.toogle
            }
        case isToogle_:
            return {
                ...state,
                isToogle: action.toogle
                    ? [...state.isToogle, action.userId]
                    : [state.isToogle.filter(id => id != action.userId)]
            }
        default: return state;
    }


}

export const getUser = (tekPage, count) => {
    return async (dispatch) => {
        dispatch(isFetching(true));
        dispatch(unloadUserPage(tekPage));
        let data = await API.getUser(tekPage, count);
        dispatch(isFetching(false)); 
        dispatch(unloadState(data.items)); 
        dispatch(unloadCountUser(data.totalCount));
    }
}

const UnfollowFollow = async (dispatch, userId, nameACFunction, nameFunction) =>{
    dispatch(isToogleData(true, userId));
    let data = await nameACFunction(userId);
    if (data.resultCode === 0) {
        dispatch(nameFunction(userId));
    }
    dispatch(isToogleData(false, userId));

}

export const unfollow = (userId) => {
    return async (dispatch) => {
        UnfollowFollow(dispatch, userId, API.getUnFollow.bind(API), UnFollofSucsess);                        
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        UnfollowFollow(dispatch, userId, API.getFollow.bind(API), FollowSucsess);        
    }    
}

export default usersreducer;