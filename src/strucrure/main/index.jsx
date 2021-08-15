import React, {useState} from 'react'
import styles from './styles.module.scss'
import {Route, Switch} from "react-router-dom";
import {StartPage} from "../../pages/startPage";
import {Counter} from "../../components/Counter";
import {PostPage} from "../../pages/PostPage";

export const Main = () => {
    const routes = {
        counter:'/counter',
        posts:'/posts'
    }

    return (
        <div className={styles.wrapper}>
            <Switch>
                <Route path={'/'} exact render={() => <StartPage/>}/>
                <Route path={routes.counter} render={() => <Counter/>}/>
                <Route path={routes.posts} render={() => <PostPage/>}/>
            </Switch>
        </div>
    )
}
