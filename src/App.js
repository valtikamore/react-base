import styles from './App.module.scss';
import {Counter} from "./components/Counter";
import { Route, Switch} from 'react-router-dom'
import {PostPage} from "./components/PostPage";
export const App = () => {
    const routes = {
        counter:'/counter',
        posts:'/posts'
    }
  return (
    <div className={styles.wrapper}>
      <Switch>
          <Route path={'/'} exact render={() => <div>start</div>}/>
          <Route path={routes.counter} render={() => <Counter/>}/>
          <Route path={routes.posts} render={() => <PostPage/>}/>
      </Switch>
    </div>
  );
}


