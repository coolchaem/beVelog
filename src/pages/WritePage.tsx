import React from 'react';
import { Helmet } from 'react-helmet';

const WritePage = () => {
  return (
    <div>
      <Helmet>
        <title>새 글 작성하기 | velog</title>
      </Helmet>
      <div>새 글 작성 페이지 입니다!</div>
    </div>
  );
};

export default WritePage;
