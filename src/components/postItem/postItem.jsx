import React from 'react'
import styles from './styles.module.scss'
export const PostItem = ({title,description,removePost,id}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.content}>
                <div>{description}</div>
               <button onClick={removePost(id)}>remove</button>
            </div>
        </div>
    )
}
