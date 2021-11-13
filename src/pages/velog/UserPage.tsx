import React, { useEffect } from 'react';
import { callApi } from '../../api/api';

const UserPage = () => {
  useEffect(() => {
    callApi({ method: 'get', url: '/users' })
      .then((response) => {
        console.log(response);
      })
  }, []);
  return <div>소개 페이지 입니다.</div>;
};

export default UserPage;
