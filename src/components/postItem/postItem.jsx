import React from 'react'
import styles from './styles.module.scss'
export const PostItem = ({post,removePost}) => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                {post.title}
            </div>
            <div className={styles.content}>
                <div>{post.body}</div>
               <button onClick={() =>removePost(post.id)}>remove</button>
            </div>
        </div>
    )
}
