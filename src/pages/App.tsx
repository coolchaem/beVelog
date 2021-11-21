import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import VelogPage from './velog/VelogPage';
import ReadingListPage from './readingList/ReadingListPage';
import RecentPostsPage from './home/RecentPostsPage';
import SavesPage from './SavesPage';
import SettingPage from './SettingPage';
import WritePage from './home/PostPage';
import HomePage from './home/HomePage';
import { Counter } from '../components/molecules/Counter';
import Header from '../components/organisms/main/Header';

const App = () => {
  const userId = 'yeojin';
  return (
    <>
      <Counter />
      <BrowserRouter>
        <Header />
        <ul>
          <li>
            <Link to="/">트렌딩</Link>
          </li>
          <li>
            <Link to="/recent">최신</Link>
          </li>
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
          <Route path="/recent" component={RecentPostsPage} />
          <Route path="/write" component={WritePage} />
          <Route path="/saves" component={SavesPage} />
          <Route path="/lists" component={ReadingListPage} />
          <Route path="/setting" component={SettingPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
