import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import VelogPage from './velog/VelogPage';
import ReadingListPage from './readingList/ReadingListPage';
import SavesPage from './SavesPage';
import SettingPage from './SettingPage';
import WritePage from './home/PostPage';
import HomePage from './home/HomePage';
import { useAppSelector } from '../redux/hooks';
import LoginPage from './LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const userId = useAppSelector(state => state.userState.username);
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/write">새 글 작성</Link>
          </li>
          <li>
            <Link to={`/@${userId}`}>MyVelog</Link>
          </li>
          <li>
            <Link to="/saves">임시 글</Link>
          </li>
          <li>
            <Link to="/lists">읽기 목록</Link>
          </li>
          <li>
            <Link to="/setting">설정</Link>
          </li>
        </ul>
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route path="/@:userId" component={VelogPage} />
          <Route path="/:mode(trending|recent)" component={HomePage} />
          <Route path="/write" component={WritePage} />
          <Route path="/saves" component={SavesPage} />
          <Route path="/lists" component={ReadingListPage} />
          <Route path="/setting" component={SettingPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
