import React from 'react';
import { Link, Route, RouteComponentProps, Router, Switch } from 'react-router-dom';
import Header from '../../components/organisms/main/Header';
import RecentPostsPage from './RecentPostsPage';
import TrendingPostsPage from './TrendingPostsPage';

const HomePage = () => {
  return (
    <>
      <Header />
      <div>홈 페이지 입니다.</div>
      <ul>
        <Link to="/"><li>트렌딩</li></Link>
        <Link to="/recent"><li>최신</li></Link>
      </ul>
      <Switch>
        <Route path={['/', '/trending']} component={TrendingPostsPage} exact />
        <Route path="/recent" component={RecentPostsPage} />
      </Switch>
    </>);
};

export default HomePage;
