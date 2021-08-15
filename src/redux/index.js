import {combineReducers, createStore} from "redux";
import {posts} from "./reducers/posts";
import {composeWithDevTools} from "redux-devtools-extension";

export const rootReducer = combineReducers({
    posts
})
export const store = createStore(
    rootReducer,
    composeWithDevTools()

)
