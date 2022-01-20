import { stopSubmit } from "redux-form";
import { API } from "../api/api";

const AddPost = 'Add-Post';
const UserInfo = 'UserInfo';
const SET_SATUS = 'SET_SATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
const SAVE_PROFILE = 'SAVE_PROFILE';


export const AddPostActionCreator = (post) => ({ type: AddPost, post });
export const UserInfoAC = (users) => ({ type: UserInfo, users });
export const StatusAC = (status) => ({ type: SET_SATUS, status });
export const SavePhoto = (photo) => ({ type: SAVE_PHOTO, photo });
export const SaveProfile = (profile) => ({ type: SAVE_PROFILE, aboutMe: profile.aboutMe, lookingForAJob: profile.lookingForAJob, fullName: profile.fullName, lookingForAJobDescription: profile.lookingForAJobDescription, facebook:profile.contacts.facebook, website:profile.contacts.website, vk:profile.contacts.vk, twitter:profile.contacts.twitter, instagram:profile.contacts.instagram, youtube:profile.contacts.youtube, github:profile.contacts.github, mainLink:profile.contacts.mainLink});

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
        case SAVE_PHOTO:
            return {
                ...state,
                usersInfo: { ...state.usersInfo, photos: action.photo }
            }
        case SAVE_PROFILE:
            debugger;
            return {
                ...state,
                usersInfo: { ...state.usersInfo, aboutMe: action.aboutMe, lookingForAJob: action.lookingForAJob,  fullName: action.fullName, lookingForAJobDescription: action.lookingForAJobDescription, ...state.usersInfo.contacts, facebook: action.facebook, website: action.website, vk: action.vk, twitter: action.twitter, instagram: action.instagram, youtube: action.youtube, github: action.github, mainLink: action.mainLink},
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

export const unloadPhoto = (file) =>
    async (dispatch) => {
        let data = await API.unloadPhoto(file);
        if (data.resultCode === 0) {
            debugger;
            dispatch(SavePhoto(data.data.photos))
        }
    }

export const saveProfile = (profile) =>
    async (dispatch, getState) => {
        let userId=getState().auth.userId;
        let data = await API.saveProfile(profile);
        debugger;
        if (data.resultCode === 0) {
            dispatch(getProfile(userId));
        }
        else{
            data.messages.map((k)=> 
                { 
                const editform=k.substring(k.indexOf(">")+1, k.length-1).toLowerCase();
                dispatch(stopSubmit("editprofile", {"contacts": {[editform]: k}}))
                return Promise.reject(k);
                }
            
            );
            //return dispatch(stopSubmit("editprofile", {"contacts": {"facebook": data.messages[0]}}))
            //alert(k.substring(k.indexOf(">")+1, k.length-1).toLowerCase())
        }
    }


export default profilereducer;