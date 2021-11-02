import React from 'react';
import { Link, Route, RouteComponentProps, Switch } from 'react-router-dom';
import UserPage from './UserPage';
import ArticlePage from './ArticlePage';
import SeriesPage from './SeriesPage';

const VelogPage = ({ match }: RouteComponentProps) => {
  const userId = match.params.userId;
  return (
    <div>
      {`내 벨로그 페이지 입니다. userId : ${userId}`}
      <br />
      <ul>
        <li>
          <Link to={`${match.url}`}>글</Link>
        </li>
        <li>
          <Link to={`${match.url}/series`}>시리즈</Link>
        </li>
        <li>
          <Link to={`${match.url}/about`}>소개</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={match.url} component={ArticlePage} />
        <Route path={`${match.url}/series`} component={SeriesPage} />
        <Route path={`${match.url}/about`} component={UserPage} />
      </Switch>
    </div>);
};

export default VelogPage;
