import {actionTypes} from "../actionTypes";

const initialState = {
    posts:[]
}

export const posts = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_POST :
            const newPost = {
                title:action.title,
                body:action.body,
                id:Date.now()
            }
            return {
                ...state,
                posts:[...state.posts,newPost]
            }
        case actionTypes.DELETE_POST:
            return {
                ...state,
                posts:[...state.posts.filter((post) => post.id !== action.id)]
            }
        default: return state
    }
}
