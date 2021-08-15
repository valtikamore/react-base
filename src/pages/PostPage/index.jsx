import React, {useState} from 'react'
import styles from './styles.module.scss'
import {PostItem} from "../../components/postItem/postItem";
import {Input} from "../../components/input/input";
import {useDispatch, useSelector} from "react-redux";
import {addPost, deletePost} from "../../redux/actions/posts";

export const PostPage = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch()

    const posts = useSelector((state) => state.posts.posts)
    console.log(posts)
    const addNewPost = (title,body) => {
        dispatch(addPost(title,body))
    }
    const removePost = (id) => {
       dispatch(deletePost(id))
    }

    const postList = posts.map((post) => <PostItem post={post} removePost={removePost}/>)

        return (
        <div className={styles.wrapper}>
            <div className={styles.controllers}>
                <Input value={title} onChange={(e) => setTitle(e.target.value)}>
                    Enter title
                </Input>
                <Input value={body} onChange={(e) => setBody(e.target.value)} >
                    Enter description
                </Input>
                <button onClick={() => addNewPost(title,body)}>add post</button>
            </div>
            <div className={styles.posts}>
                {posts.length !== 0 ? postList: <div>you haven't got any posts</div>}
            </div>

        </div>
    )
}
