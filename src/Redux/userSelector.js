import {createSelector} from 'reselect'

export const getcountUser = (state) => {
    return (state.usersPage.countUser)
}
export const getCount = (state) => {
    return (state.usersPage.count)
}
export const gettekPage = (state) => {
    return (state.usersPage.tekPage)
}
export const getUsers = (state) => {
    return (state.usersPage.users)
}
export const getisToogle = (state) => {
    return (state.usersPage.isToogle)
}
export const getisFetching = (state) => {
    return (state.usersPage.isFetching)
}
export const getUsersSuper = createSelector(getUsers, (users)=>{
    return users.filter(u=>true)
})



