import React, {useRef, useState} from 'react'
import styles from './styles.module.scss'
import {data} from "./mock";
import {PostItem} from "../postItem/postItem";
import {Input} from "../input/input";
export const PostPage = () => {
    const [posts, setPosts] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addPost = () => {
        const post = {
            title,
            description,
            id:Date.now()
        }
        setPosts([...posts,post])
    }

    const removePost = (id) => {
        // const filteredPosts = posts.filter((item) => item.id === id)
        // setPosts([...filteredPosts])
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.controllers}>
                <Input value={title} onChange={(e) => setTitle(e.currentTarget.value)}>
                    Enter title
                </Input>
                <Input value={description} onChange={(e) => setDescription(e.currentTarget.value)}>
                    Enter description
                </Input>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={styles.posts}>
                {posts && posts.map(({title,description,id}) => {
                    return <PostItem title={title} description={description} key={id} removePost={removePost}/>
                })}
            </div>

        </div>
    )
}
