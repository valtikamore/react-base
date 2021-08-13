import React, {useState} from 'react'
import styles from './styles.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(0);

    const handlerAdd = () => {
        setCount(count + 1)
    }

    const handlerRemove = () => {
        setCount(count - 1)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.count}>
                    {count}
                </div>
                <div>
                    <button onClick={handlerAdd}>minus</button>
                    <button onClick={handlerRemove}>plus</button>
                </div>
            </div>
        </div>
    )
}
