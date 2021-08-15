import {actionTypes} from "../actionTypes";

export const addPost = (title,body,id) => ({
    type:actionTypes.ADD_NEW_POST,
    title,
    body,
    id
})

export const deletePost = (id) => ({
    type:actionTypes.DELETE_POST,
    id
})
