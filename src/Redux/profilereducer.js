import { API } from "../api/api";

const AddPost = 'Add-Post';
const UserInfo = 'UserInfo';
const SET_SATUS = 'SET_SATUS';


export const AddPostActionCreator = (post) => ({ type: AddPost, post });
export const UserInfoAC = (users) => ({ type: UserInfo, users });
export const StatusAC = (status) => ({ type: SET_SATUS, status });

let initialState = {
    postdata: [
        { id: 1, message: 'Hello', like: '15' },
        { id: 2, message: 'first', like: '20' }
    ],
    usersInfo: null,
    status: ""
}

let profilereducer = (state = initialState, action) => {
    switch (action.type) {
        case AddPost:
            return {
                ...state,
                postdata: [...state.postdata, { id: 3, message: action.post, like: 0 }]
            }
        case UserInfo:
            return {
                ...state,
                usersInfo: action.users
            }
        case SET_SATUS:
            return {
                ...state,
                status: action.status
            }
        default: return state;
    }


}


export const getProfile = (userId) =>
    async (dispatch) => {
        let data = await API.getProfile(userId);
        dispatch(UserInfoAC(data));
    }

export const getStatus = (userId) =>
    async (dispatch) => {
        let data = await API.getStatus(userId);
        dispatch(StatusAC(data));
    }

export const updateStatus = (status) =>
    async (dispatch) => {
        let data = await API.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(StatusAC(status))
        }
    }


export default profilereducer;